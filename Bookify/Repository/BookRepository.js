const Book = require("../models/book");

async function GetBooks() {
  return await Book.find({});
}

async function GetBook(isbnVal) {
  return await Book.findOne({ isbn: isbnVal });
}

async function AddBook(book) {
  let buk = new Book({
    title: book.title,
    author: book.author,
    isbn: book.isbn,
    description: book.description,
    price: book.price,
    publisher: book.publisher,
    publicationDate: book.publicationDate,
    genre: book.genre,
    language: book.language,
  });

  return await buk.save();
}

async function DeleteBook(isbnVal) {
  await Book.deleteOne({ isbn: isbnVal });
}

async function UpdateBook(isbnVal, book) {
  await Book.updateOne(
    { isbn: isbnVal },
    {
        title: book.title,
        author: book.author,
        isbn: book.isbn,
        description: book.description,
        price: book.price,
        publisher: book.publisher,
        publicationDate: book.publicationDate,
        genre: book.genre,
        language: book.language,
    }
  );
}

module.exports = { GetBooks, GetBook, AddBook, DeleteBook, UpdateBook };