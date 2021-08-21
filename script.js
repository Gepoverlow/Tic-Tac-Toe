//Factory Function INTRO ////////////////////////////////////////////////

const bookFactory = (title, author, pages) => {
  const returnInfo = () =>
    console.log(`${title} written by ${author} has ${pages} pages`);
  return { title, author, pages, returnInfo };
};

const Book = bookFactory("Harry Potter", "JK Rowling", 136);

console.log(Book.title);
console.log(Book.author);
console.log(Book.pages);
Book.returnInfo();

///////////////////////////////////////////////////////////////////////////
