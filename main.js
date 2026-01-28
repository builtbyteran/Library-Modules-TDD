let Library = () => {
  const archive = [];
  const addBook = (book) => {
    archive.push(book);
  };
  const checkOutBook = (book) => {
    if (archive.includes(book)) {
      book.setAttribute('checkedOut', true);
    }
  };
  const returnBook = (book) => {
    if (archive.includes(book)) {
      book.setAttribute('checkedOut', false);
    }
  };
  return {
    addBook,
    checkOutBook,
    returnBook,
  };
};

let Book = (title, author) => {
  const attributes = {
    checkedOut: false,
    title: title,
    author: author,
  };
  const getAttribute = (prop) => {
    return attributes[prop];
  };
  const setAttribute = (prop, value) => {
    if (attributes.hasOwnProperty(prop)) {
      attributes[prop] = value;
    }
  };
  return {
    getAttribute,
    setAttribute,
  };
};
