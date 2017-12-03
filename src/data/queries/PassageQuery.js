import { repository } from '../models/Models';

export function getPassage(activeBook, activeChapter) {
    console.log('aaa', repository)
    var filteredPassages = repository().objects('Passage').filtered(
        `book = "${activeBook.value}" AND chapter = "${activeChapter}"`
    );
    const versesRaw = Object.keys(filteredPassages);
    if (versesRaw.length) {
        const verses = versesRaw.map(key => filteredPassages[key]);
        return verses;
    }
    console.log('adsf', versesRaw)
    return filteredPassages;
}
