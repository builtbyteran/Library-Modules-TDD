let Library = () => {
  const addBook = () => {};
  const checkOutBook = (book) => {
    book.setAttribute('checkedOut', true);
  };
  const returnBook = () => {};
  return {
    addBook,
    checkOutBook,
    returnBook,
  };
};

let Book = () => {
  const attributes = {
    checkedOut: false,
  };
  const getAttribute = (prop) => {
    return attributes[prop];
  };
  const setAttribute = (prop, value) => {
    attributes[prop] = value;
  };
  return {
    getAttribute,
    setAttribute,
  };
};
