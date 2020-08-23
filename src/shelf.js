function shelfBook(title, sciFiShelf) {
    sciFiShelf.push(title);
    sciFiShelf.sort((a, b) => (a.title > b.title) ? 1 : -1);
    sciFiShelf.length === 3;
    return sciFiShelf;
}

function unshelfBook(title, sciFiShelf) {
    
}

function listTitles() {
    
}

module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  // listTitles: listTitles,
  // searchShelf: searchShelf
};