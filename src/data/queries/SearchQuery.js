import { repository } from "../models/Models";

export function searchPassage({ searchText = "", bookPath = "" }) {
  let passages = repository(bookPath).objects("Passage");
  if (searchText.indexOf(" ") != -1) {
    let splitWords = searchText.replace("  ", " ").split(" ");
    splitWords = splitWords
      .map(word => (word != "" ? `content CONTAINS[c] "${word}"` : ""))
      .filter(word => word);
    // query = `${query} ${splitWords}`;
    var query = `${splitWords.join(" OR ")} AND type != "t"`;
  } else {
    query = `content CONTAINS[c] "${searchText}" AND type != "t"`;
  }
  let filteredPassages = passages.filtered(query).slice(0, 20);
  const resultsRaw = Object.keys(filteredPassages);
  const results = resultsRaw.map(key => filteredPassages[key]);
  return results;
}
