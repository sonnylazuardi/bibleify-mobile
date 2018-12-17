import Schema from 'constants/Schema';

export const search = {
  state: {
    text: '',
    results: [],
    show: false,
  },
  reducers: {
    setText(state, payload) {
      return { ...state, text: payload };
    },
    setResults(state, payload) {
      return { ...state, results: payload };
    },
    setShow(state, payload) {
      return { ...state, show: payload };
    },
  },
  effects: {
    fetchSearch(payload, rootState) {
      const { text } = rootState.search;
      const { activeVersion } = rootState.bible;
      Realm.open({
        schema: [Schema.PassageSchema],
        readOnly: true,
        inMemory: false,
        path: `${remote.app.getAppPath()}/${activeVersion.value}.realm`,
      }).then(realm => {
        const passages = realm.objects('Passage');
        const query = `content CONTAINS[c] "${text}" AND type != "t"`;
        const filteredPassages = passages.filtered(query).slice(0, 50);

        const resultsRaw = Object.keys(filteredPassages);
        const results = resultsRaw.map(key => filteredPassages[key]);
        this.setShow(true);
        this.setResults(results);
      });
    },
  },
};

export default search;
