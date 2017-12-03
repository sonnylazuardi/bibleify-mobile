import { repository } from '../models/Models';

export function getPassage(activeBook, activeChapter) {
    var filteredPassages = repository().objects('Passage').filtered(
        `book = "${activeBook.value}" AND chapter = "${activeChapter}"`
    );
    const versesRaw = Object.keys(filteredPassages);
    if (versesRaw.length) {
        const verses = versesRaw.map(key => filteredPassages[key]);
        return verses;
    }
    return filteredPassages;
}

export function searchPassage(searchText) {
    let passages = repository().objects("Passage");
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
