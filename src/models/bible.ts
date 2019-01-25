import Books from 'constants/Books';
import Schema from 'constants/Schema';
import Versions from 'constants/Versions';
import { Platform } from 'react-native';
import RNFS from 'react-native-fs';
import Realm from 'realm';

export const bible = {
  state: {
    activeVersion: Versions[4],
    activeBook: Books[0],
    activeChapter: 1,
    activeVerse: null,
    jumpText: '',
    verses: [],
  },
  reducers: {
    setActiveChapter(state, payload) {
      return { ...state, activeChapter: payload };
    },
    setActiveBook(state, payload) {
      return { ...state, activeBook: payload };
    },
    jumpToVerse(state, payload) {
      const { activeBook, activeChapter, activeVerse } = payload;
      return { ...state, activeBook, activeChapter, activeVerse };
    },
    setActiveVersion(state, payload) {
      return { ...state, activeVersion: payload };
    },
    setVerses(state, payload) {
      return { ...state, verses: payload };
    },
    setJumpText(state, payload) {
      return { ...state, jumpText: payload };
    },
    prevChapter(state) {
      let newChapter = state.activeChapter - 1;
      if (newChapter < 1) {
        newChapter = 1;
      }
      return { ...state, activeChapter: newChapter };
    },
    nextChapter(state) {
      let newChapter = state.activeChapter + 1;
      const currentBook = Books.find(book => {
        return book.value == state.activeBook.value;
      });
      if (newChapter > currentBook.total) {
        newChapter = currentBook.total;
      }
      return { ...state, activeChapter: newChapter };
    },
  },
  effects: {
    loadVersion(payload, rootState) {
      const activeVersion = rootState.bible.activeVersion.value;
      if (Platform.OS == 'ios') {
        RNFS.copyFile(
          RNFS.MainBundlePath + `/${activeVersion}.realm`,
          RNFS.DocumentDirectoryPath + `/${activeVersion}.realm`,
        );
      } else {
        RNFS.copyFileAssets(`${activeVersion}.realm`, `${RNFS.DocumentDirectoryPath}/${activeVersion}.realm`);
      }
    },
    fetchVerses(payload, rootState) {
      const { activeBook, activeChapter } = payload;
      const activeVersion = rootState.bible.activeVersion.value;

      Realm.open({
        schema: [Schema.PassageSchema],
        readOnly: true,
        inMemory: false,
        path: `${activeVersion}.realm`,
      }).then(realm => {
        const passages = realm.objects('Passage');
        const filteredPassages = passages.filtered(`book = "${activeBook.value}" AND chapter = "${activeChapter}"`);
        const versesRaw = Object.keys(filteredPassages);
        if (versesRaw.length) {
          const verses = versesRaw.map(key => filteredPassages[key]);
          this.setVerses(verses);
        }
      });
    },
  },
};

export default bible;
