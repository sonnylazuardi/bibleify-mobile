export const player = {
  state: {
    streamUrl: null,
    chapter: null,
    book: null,
    totalTime: 0,
    paused: false,
    currentTime: 0,
    repeat: true,
    volume: 75,
  },
  reducers: {
    setStreamUrl(state, payload) {
      return { ...state, streamUrl: payload };
    },
    setChapter(state, payload) {
      return { ...state, chapter: payload };
    },
    setBook(state, payload) {
      return { ...state, book: payload };
    },
    setPaused(state, payload) {
      return { ...state, paused: payload };
    },
    setTotalTime(state, payload) {
      return { ...state, totalTime: payload };
    },
    setCurrentTime(state, payload) {
      return { ...state, currentTime: payload };
    },
    setTime(state, payload) {
      return { ...state, totalTime: payload.totalTime, currentTime: payload.currentTime };
    },
    setVolume(state, payload) {
      return { ...state, volume: payload };
    },
    setRepeat(state, payload) {
      return { ...state, repeat: payload };
    },
  },
  effects: {
    playCurrentChapter(payload, rootState) {
      const { activeBook, activeChapter, activeVersion } = rootState.bible;
      const streamUrl = PlayerUtils.getStreamUrl(activeBook, activeChapter, activeVersion);
      this.setBook(activeBook);
      this.setChapter(activeChapter);
      this.setPaused(false);
      this.setStreamUrl(streamUrl);
    },
    close() {
      this.setPaused(false);
      this.setBook(null);
      this.setChapter(null);
      this.setStreamUrl(null);
    },
  },
};

export default player;
