const repo = require("../Repository/BookRepository");

async function GetBooks() {
  return await repo.GetBooks();
}

async function GetBook(isbn) {
  let res = await repo.GetBook(isbn);
  if (res == null) {
    throw Error(`Book with isbn: ${isbn} does not exists`);
  } else {
    return res;
  }
}

async function AddBook(book) {
  let res = await repo.GetBook(book.isbn);
  if (res != null) {
    throw Error(
      `Book with isbn: ${book.isbn} already exists`
    );
  } else {
    await repo.AddBook(book);
  }
}

async function DeleteBook(isbn) {
  let res = await repo.GetBook(isbn);
  if (res == null) {
    throw Error(`Book with isbn: ${isbn} does not exists`);
  } else {
    await repo.DeleteBook(isbn);
  }
}

async function UpdateBook(isbn, book) {
  let res = await repo.GetBook(isbn);
  if (res == null) {
    throw Error(`Book with isbn: ${isbn} does not exists`);
  } else {
    await repo.UpdateBook(isbn, book);
  }
}

module.exports = { GetBooks, GetBook, AddBook, DeleteBook, UpdateBook };