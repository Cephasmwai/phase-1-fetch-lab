function fetchBooks() {
  // Return the fetch promise chain so tests can access it
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json())
    .then(json => renderBooks(json));
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}
fetch("https://anapioficeandfire.com/api/books")
  .then(resp => resp.json())
  .then(books => {
    // The 5th book (array index 4 since arrays are 0-based)
    const fifthBook = books[4];
    console.log("5th Book:", fifthBook.name);
  });
  fetch("https://anapioficeandfire.com/api/characters/1031")
  .then(resp => resp.json())
  .then(character => {
    console.log("1031st Character:", character.name);
  });
  fetch("https://anapioficeandfire.com/api/books")
  .then(resp => resp.json())
  .then(books => {
    const totalPages = books.reduce((sum, book) => sum + book.numberOfPages, 0);
    console.log("Total Pages:", totalPages);
  });