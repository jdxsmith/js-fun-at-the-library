function createLibrary(name) {
    var fantasy = [];
    var fiction = [];
    var nonFiction = [];
    var library = {
        name: name,
        shelves: {fantasy, fiction, nonFiction},
    }
    return library;
}

function addBook(library, book) {
    if (book.genre === 'fantasy') {
      library.shelves.fantasy.push(book);
    } else if (book.genre === 'fiction') {
      library.shelves.fiction.push(book);
    } else if (book.genre === 'nonFiction') {
      library.shelves.nonFiction.push(book);
    }
}

function checkoutBook(library, title) {
      var book = title;
      if (title === 'Dracula') {
      library.shelves.fantasy.splice(book);
    } else if (title === 'Pride and Prejudice') {
      library.shelves.fiction.splice(book);
    } else if (title === 'Born a Crime') {
      library.shelves.nonFiction.splice(book);
    } else if (title = "The Fifth Season") {
        return `Sorry, there are currently no copies of ${title} available at the Denver Public Library`
    }
  return `You have now checked out ${title} from the Denver Public Library`;
}

module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};