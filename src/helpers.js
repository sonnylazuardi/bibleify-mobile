export const bookNameHelper = (value) => {
    let bookName = value
    .replace(/ /g, "")
    .replace(/\-/g, "")
    .toUpperCase();
    if (bookName == "HAKIMHAKIM") bookName = "HAKIM";
    if (bookName == "KISAHPARARASUL") bookName = "KISAH PARA RASUL";

    return bookName;
  };