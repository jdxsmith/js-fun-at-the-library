function createTitle(title) {
    var bookTitle = `The ${title}`;
    return bookTitle;
}


function buildMainCharacter(name, age, pronouns) {
    var bookCharacter = {
        name: name,
        age: age,
        pronouns: pronouns,
    }
    return bookCharacter;
}


function saveReview(review, reviews) {
    if(reviews.indexOf(review) === -1) {
        reviews.push(review);
    } 
    return reviews;
}


function calculatePageCount(title) {
    var bookPageCount = (title.length * 20);
    return bookPageCount;
}


function writeBook(bookTitle, bookCharacter, genre) {
    var book = {
        title: bookTitle,
        mainCharacter: bookCharacter,
        pageCount: calculatePageCount(bookTitle),
        genre: genre,
    }
    return book;
}


function editBook(book) {
    return book.pageCount = (book.pageCount * .75);
}


module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  calculatePageCount: calculatePageCount,
  writeBook: writeBook,
  editBook: editBook
}