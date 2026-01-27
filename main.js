let Library = () => {
  return {
    addBook: function () {},
    checkOutBook: function (book) {
      if (!book['checkedOut']) {
        book['checkedOut'] = true;
        console.log(book['checkedOut']);
      }
    },
  };
};

let Book = () => {
  return {
    getAttribute: function (book, attribute) {
      if (book.hasOwnProperty(attribute)) {
        return book.attribute;
      }
    },
    setAttribute: function () {},
  };
};
