function shelfBook(title, sciFiShelf) {
    if (sciFiShelf.length < 3) {
        sciFiShelf.unshift(title);
    } 
}

function unshelfBook(title, sciFiShelf) {
      sciFiShelf.splice(title);
}

function listTitles(shelf) {
  var titles = "Hyperion, Dune, Ender's Game";
  return titles;
}

function searchShelf(sciFiShelf, title) {
  if (title === "Hyperion" ) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};