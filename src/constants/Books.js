const Books = [
  {
    name: "Genesis",
    name_id: "Kejadian",
    total: 50,
    value: "Gen",
    type: "old"
  },
  { name: "Exodus", name_id: "Keluaran", total: 40, value: "Exo", type: "old" },
  {
    name: "Leviticus",
    name_id: "Imamat",
    total: 27,
    value: "Lev",
    type: "old"
  },
  {
    name: "Numbers",
    name_id: "Bilangan",
    total: 36,
    value: "Num",
    type: "old"
  },
  {
    name: "Deuteronomy",
    name_id: "Ulangan",
    total: 34,
    value: "Deu",
    type: "old"
  },
  { name: "Joshua", name_id: "Yosua", total: 24, value: "Jos", type: "old" },
  { name: "Judges", name_id: "Hakim", total: 21, value: "Jud", type: "old" },
  { name: "Ruth", name_id: "Rut", total: 4, value: "Ruth", type: "old" },
  {
    name: "1 Samuel",
    name_id: "1 Samuel",
    total: 31,
    value: "1Sa",
    type: "old"
  },
  {
    name: "2 Samuel",
    name_id: "2 Samuel",
    total: 24,
    value: "2Sa",
    type: "old"
  },
  { name: "1 Kings", name_id: "1 Raja", total: 22, value: "1Ki", type: "old" },
  { name: "2 Kings", name_id: "2 Raja", total: 25, value: "2Ki", type: "old" },
  {
    name: "1 Chronicles",
    name_id: "1 Tawarikh",
    total: 29,
    value: "1Chr",
    type: "old"
  },
  {
    name: "2 Chronicles",
    name_id: "2 Tawarikh",
    total: 36,
    value: "2Chr",
    type: "old"
  },
  { name: "Ezra", name_id: "Ezra", total: 10, value: "Ezr", type: "old" },
  {
    name: "Nehemiah",
    name_id: "Nehemia",
    total: 13,
    value: "Neh",
    type: "old"
  },
  { name: "Esther", name_id: "Ester", total: 10, value: "Est", type: "old" },
  { name: "Job", name_id: "Ayub", total: 42, value: "Job", type: "old" },
  { name: "Psalms", name_id: "Mazmur", total: 150, value: "Psa", type: "old" },
  { name: "Proverbs", name_id: "Amsal", total: 31, value: "Pro", type: "old" },
  {
    name: "Ecclesiastes",
    name_id: "Pengkotbah",
    total: 12,
    value: "Ecc",
    type: "old"
  },
  {
    name: "Song of Solomon",
    name_id: "Kidung Agung",
    total: 8,
    value: "Song",
    type: "old"
  },
  { name: "Isaiah", name_id: "Yesaya", total: 66, value: "Isa", type: "old" },
  {
    name: "Jeremiah",
    name_id: "Yeremia",
    total: 52,
    value: "Jer",
    type: "old"
  },
  {
    name: "Lamentations",
    name_id: "Ratapan",
    total: 5,
    value: "Lam",
    type: "old"
  },
  {
    name: "Ezekiel",
    name_id: "Yehezkiel",
    total: 48,
    value: "Eze",
    type: "old"
  },
  { name: "Daniel", name_id: "Daniel", total: 12, value: "Dan", type: "old" },
  { name: "Hosea", name_id: "Hosea", total: 14, value: "Hos", type: "old" },
  { name: "Joel", name_id: "Yoel", total: 3, value: "Joe", type: "old" },
  { name: "Amos", name_id: "Amos", total: 9, value: "Amo", type: "old" },
  { name: "Obadiah", name_id: "Obaja", total: 1, value: "Oba", type: "old" },
  { name: "Jonah", name_id: "Yunus", total: 4, value: "Jon", type: "old" },
  { name: "Micah", name_id: "Mikha", total: 7, value: "Mic", type: "old" },
  { name: "Nahum", name_id: "Nahum", total: 3, value: "Nah", type: "old" },
  { name: "Habakkuk", name_id: "Habakuk", total: 3, value: "Hab", type: "old" },
  {
    name: "Zephaniah",
    name_id: "Zefanya",
    total: 3,
    value: "Zep",
    type: "old"
  },
  { name: "Haggai", name_id: "Hagai", total: 2, value: "Hag", type: "old" },
  {
    name: "Zechariah",
    name_id: "Zakharia",
    total: 14,
    value: "Zec",
    type: "old"
  },
  { name: "Malachi", name_id: "Maleakhi", total: 4, value: "Mal", type: "old" },
  { name: "Matthew", name_id: "Matius", total: 28, value: "Mat", type: "new" },
  { name: "Mark", name_id: "Markus", total: 16, value: "Mar", type: "new" },
  { name: "Luke", name_id: "Lukas", total: 24, value: "Luk", type: "new" },
  { name: "John", name_id: "Yohanes", total: 21, value: "Joh", type: "new" },
  {
    name: "Acts",
    name_id: "Kisah Para Rasul",
    total: 28,
    value: "Act",
    type: "new"
  },
  { name: "Romans", name_id: "Roma", total: 16, value: "Rom", type: "new" },
  {
    name: "1 Corinthians",
    name_id: "1 Korintus",
    total: 16,
    value: "1Co",
    type: "new"
  },
  {
    name: "2 Corinthians",
    name_id: "2 Korintus",
    total: 13,
    value: "2Co",
    type: "new"
  },
  {
    name: "Galatians",
    name_id: "Galatia",
    total: 6,
    value: "Gal",
    type: "new"
  },
  { name: "Ephesians", name_id: "Efesus", total: 6, value: "Eph", type: "new" },
  {
    name: "Philippians",
    name_id: "Filipi",
    total: 4,
    value: "Phi",
    type: "new"
  },
  {
    name: "Colossians",
    name_id: "Kolose",
    total: 4,
    value: "Col",
    type: "new"
  },
  {
    name: "1 Thessalonians",
    name_id: "1 Tesalonika",
    total: 5,
    value: "1Th",
    type: "new"
  },
  {
    name: "2 Thessalonians",
    name_id: "2 Tesalonika",
    total: 3,
    value: "2Th",
    type: "new"
  },
  {
    name: "1 Timothy",
    name_id: "1 Timotius",
    total: 6,
    value: "1Ti",
    type: "new"
  },
  {
    name: "2 Timothy",
    name_id: "2 Timotius",
    total: 4,
    value: "2Ti",
    type: "new"
  },
  { name: "Titus", name_id: "Titus", total: 3, value: "Tit", type: "new" },
  { name: "Philemon", name_id: "Filemon", total: 1, value: "Phm", type: "new" },
  { name: "Hebrews", name_id: "Ibrani", total: 13, value: "Heb", type: "new" },
  { name: "James", name_id: "Yakobus", total: 5, value: "Jam", type: "new" },
  { name: "1 Peter", name_id: "1 Petrus", total: 5, value: "1Pe", type: "new" },
  { name: "2 Peter", name_id: "2 Petrus", total: 3, value: "2Pe", type: "new" },
  { name: "1 John", name_id: "1 Yohanes", total: 5, value: "1Jo", type: "new" },
  { name: "2 John", name_id: "2 Yohanes", total: 1, value: "2Jo", type: "new" },
  { name: "3 John", name_id: "3 Yohanes", total: 1, value: "3Jo", type: "new" },
  { name: "Jude", name_id: "Yudas", total: 1, value: "Jud", type: "new" },
  { name: "Revelation", name_id: "Wahyu", total: 22, value: "Rev", type: "new" }
];

export default Books;
