import { repository } from "../models/Models";

export function getPassage({
  activeBook = "",
  activeChapter = "",
  bookPath = "nkjv.realm"
}) {
  var filteredPassages = repository(bookPath)
    .objects("Passage")
    .filtered(`book = "${activeBook.value}" AND chapter = "${activeChapter}"`);
  const versesRaw = Object.keys(filteredPassages);
  if (versesRaw.length) {
    const verses = versesRaw.map(key => filteredPassages[key]);
    return verses;
  }
  return filteredPassages;
}


