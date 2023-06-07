const books = [{
        title: 'Book 1',
        author: 'authors 1 ',
        genre: 'Genre 1',
        pages: 150,
        cover: 'book1.jpg'
    },
    {
        title: 'Book 2',
        author: authors[1],
        genre: 'Genre 2',
        pages: 220,
        cover: 'book2.jpg'
    },
    {
        title: 'Book 3',
        author: authors[2],
        genre: 'Genre 3',
        pages: 180,
        cover: 'book3.jpg'
    },
    {
        title: 'Book 4',
        author: authors[3],
        genre: 'Genre 4',
        pages: 250,
        cover: 'book4.jpg'
    },
    {
        title: 'Book 5',
        author: authors[4],
        genre: 'Genre 5',
        pages: 190,
        cover: 'book5.jpg'
    },
    {
        title: 'Book 6',
        author: authors[5],
        genre: 'Genre 6',
        pages: 300,
        cover: 'book6.jpg'
    },
    {
        title: 'Book 7',
        author: authors[6],
        genre: 'Genre 7',
        pages: 220,
        cover: 'book7.jpg'
    },
    {
        title: 'Book 8',
        author: authors[7],
        genre: 'Genre 8',
        pages: 170,
        cover: 'book8.jpg'
    },
    {
        title: 'Book 9',
        author: authors[8],
        genre: 'Genre 9',
        pages: 230,
        cover: 'book9.jpg'
    },
    {
        title: 'Book 10',
        author: authors[9],
        genre: 'Genre 10',
        pages: 200,
        cover: 'book10.jpg'
    },
    {
        title: 'Book 11',
        author: authors[10],
        genre: 'Genre 11',
        pages: 280,
        cover: 'book11.jpg'
    },
    {
        title: 'Book 12',
        author: authors[11],
        genre: 'Genre 12',
        pages: 160,
        cover: 'book12.jpg'
    },
    {
        title: 'Book 13',
        author: authors[12],
        genre: 'Genre 13',
        pages: 210,
        cover: 'book13.jpg'
    },
    {
        title: 'Book 14',
        author: authors[13],
        genre: 'Genre 14',
        pages: 240,
        cover: 'book14.jpg'
    },
    {
        title: 'Book 15',
        author: authors[14],
        genre: 'Genre 15',
        pages: 190,
        cover: 'book15.jpg'
    },
    {
        title: 'Book 16',
        author: authors[15],
        genre: 'Genre 16',
        pages: 320,
        cover: 'book16.jpg'
    },
    {
        title: 'Book 17',
        author: authors[16],
        genre: 'Genre 17',
        pages: 170,
        cover: 'book17.jpg'
    },
    {
        title: 'Book 18',
        author: authors[17],
        genre: 'Genre 18',
        pages: 200,
        cover: 'book18.jpg'
    },
    {
        title: 'Book 19',
        author: authors[18],
        genre: 'Genre 19',
        pages: 250,
        cover: 'book19.jpg'
    },
    {
        title: 'Book 20',
        author: authors[19],
        genre: 'Genre 20',
        pages: 180,
        cover: 'book20.jpg'
    },
];


let currentIndex = 0;
const bookElem = document.querySelector('.book');
const titleElem = bookElem.querySelector('.title');
const authorElem = bookElem.querySelector('.author');
const genreElem = bookElem.querySelector('.genre');
const pagesElem = bookElem.querySelector('.pages');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function displayBook(index) {
    const book = books[index];
    bookElem.querySelector('img').src = book.cover;
    titleElem.textContent = book.title;
    authorElem.textContent = book.author;
    genreElem.textContent = book.genre;
    pagesElem.textContent = `Number of Pages: ${book.pages}`;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + books.length) % books.length;
    displayBook(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % books.length;
    displayBook(currentIndex);
});

// Initial display
displayBook(currentIndex);
``