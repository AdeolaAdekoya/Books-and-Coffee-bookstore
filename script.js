const bookStore = [
    {
        id: '001',
        title: 'Nineteen Eighty-Four', 
        author: 'George Orwell',
        noOfPages: 403,
        price:  9.99,
        isAvailable: true,
        reviews: [],
        genre:'fiction',
        image: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781839642401/nineteen-eighty-four-9781839642401_hr.jpg',
    },
    
    {
        id: '002',
        title: 'House of Leaves', 
        author: 'Mark Z. Danielewski',
        noOfPages: 467,
        price: 15,
        isAvailable: true,
        reviews: [],
        genre:'horror',
        image: 'https://images.penguinrandomhouse.com/cover/9780375420528',
       
    },
    
    {
        
        id: '003',
        title: 'The Haunting of Hill House', 
        author: 'Shirley Jackson',
        noOfPages: 1467,
        price: 5,
        isAvailable: true,
        reviews: [],
        genre:'horror',
        image: 'https://upload.wikimedia.org/wikipedia/en/0/04/HauntingOfHillHouse.JPG',
    },
    {
        
        id: '004',
        title: 'The Great Gatsby', 
        author: 'F. Scott Fitzgerald',
        noOfPages: 1467,
        price: 7.93,
        isAvailable: false,
        reviews: [],
        genre:'fiction',
        image: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982146702/the-great-gatsby-9781982146702_hr.jpg',
    },
    {
        
        id: '004',
        title: 'Jane Eyre ', 
        author: 'Sarah Morning',
        noOfPages: 1467,
        price: 10,
        isAvailable: false,
        reviews: [],
        genre:'fiction',
        image: 'https://publicworkssteampunk.com/wp-content/uploads/2021/04/3061_Harding_Rachel-Ann-v1a.jpg',
    },
    {
        
        id: '005',
        title: 'One Hundred Years of Solitude ', 
        author: 'Gabriel García Márquez',
        noOfPages: 1467,
        price: 9.99,
        isAvailable: false,
        reviews: [] ,
        genre:'fiction',
        image: 'https://kbimages1-a.akamaihd.net/b1e75ebc-3e99-421a-be6a-b7317a4f670f/1200/1200/False/one-hundred-years-of-solitude-3.jpg',
    },
    {
        
        id: '006',
        title: 'Alkymisten ', 
        author: 'Paulo Coelho',
        noOfPages: 1467,
        price: 10,
        isAvailable: false,
        reviews: [],
        genre:'fiction',
        image: 'https://www.bestselgerklubben.no/sek-asset/products/9788280872647.jpg?w=360',
    },
    {
        
        id: '007',
        title: 'The Shining ', 
        author: ' Stephen King',
        noOfPages: 1467,
        price: 13,
        isAvailable: true,
        reviews: [],
        genre:'horror',
        image: 'https://upload.wikimedia.org/wikipedia/en/4/4c/Shiningnovel.jpg',
    },
    {
        
        id: '008',
        title: 'Mexican Gothic', 
        author: 'Silvia Moreno-Garcia',
        noOfPages: 1467,
        price: 4,
        isAvailable: false,
        reviews: [],
        genre:'horor',
        image: 'https://images1.penguinrandomhouse.com/cover/9780525620785',
    },
    {
        
        id: '009',
        title: 'It', 
        author: 'Stephen King',
        noOfPages: 1467,
        price: 10.5,
        isAvailable: false,
        reviews: [],
        genre:'horror',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71tFhdcC0XL.jpg',
    },
    {
        
        id: '010',
        title: 'Harry Potter and the Cursed Child', 
        author: 'S J. K. Rowling',
        noOfPages: 1467,
        price: 18,
        isAvailable: false,
        reviews: [],
        genre:'drama',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1470082995l/29056083._SY475_.jpg',
    },
    {
        
        id: '011',
        title: 'The Lion and the Jewel', 
        author: 'Wole Soyinka',
        noOfPages: 1467,
        price: 20,
        isAvailable: true,
        reviews: [],
        genre:'drama',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1400399539l/2570.jpg',
    },
    {
        
        id: '012',
        title: 'My Sisters Keeper', 
        author: 'Jodi Picoult',
        noOfPages: 1467,
        price: 5,
        isAvailable: true,
        reviews: [],
        genre:'drama',
        image: 'https://upload.wikimedia.org/wikipedia/en/3/33/Sisterskeeper.jpg',
    },
    {
        
        id: '013',
        title: 'Romeo and Juliet', 
        author: 'William Shakespeare',
        noOfPages: 1467,
        price: 8.99,
        isAvailable: true,
        reviews: [],
        genre:'drama',
        image: 'https://i.pinimg.com/originals/c8/7b/0f/c87b0f154ab3b6bf4ef875b97ba392e7.jpg',
    },
    {
        
        id: '014',
        title: 'Where the Crawdads Sing', 
        author: 'Carolina marsh',
        noOfPages: 1467,
        price: 9,
        isAvailable: true,
        reviews: [],
        genre:'drama',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1524709161l/39948633._SY475_.jpg',
    },
    {
        
        id: '015',
        title: 'The Importance of Being Earnest', 
        author: ' Oscar Wilde',
        noOfPages: 1467,
        price: 12.45,
        isAvailable: true,
        reviews: [],
        genre:'drama',
        image: 'https://images-na.ssl-images-amazon.com/images/I/514ka11ycJL.jpg',
    },
]

// renting a book

// listing our books

let bookListContainer = document.querySelector('#books');


// this commented out one works 
// function showBooks (genre) {
//     let books = [];
//     if (genre === 'all'){
//         books = bookStore
//     } else if (genre) {
//         books = bookStore.filter(book => book.genre === genre)
//     }

function showBooks (key, searchMode) {
        let books = [];
        if (key === 'all'){
            books = bookStore
        } else if (key) {
            books = bookStore.filter(book => book.genre === key)
        }

        if (searchMode === true ) {
            books = bookStore.filter(book => {
                for (let val in book) {
                    if (book[val].toString().toLowerCase().includes(key)) {
                        return true
                    }
                }
                return false
            })
        }
    

    let bookList = books.map(book => {
        let color = book.isAvailable ? '#FFCE31' : 'tomato'
        return (
            `<li class="book" id="${book.id}">
                <figure>
                    <img src="${book.image}" >
                </figure>
                <div class="details">
                    <h3> Title: ${book.title}</h3>
                    <p>Author: ${book.author}</p>
                    <p>Price: <b>$${book.price}</b></p>
                    <button class="buy">Buy Now</button>
                    <button class="add">Add to wishlist</button>
                    <button class="rent" style="background-color: ${color}">Rent this book!</button>
                </div>
            </li>`
        )
    })
    
    if (bookList.length) {
        bookListContainer.innerHTML = bookList.join('')
    } else {
        bookListContainer.innerHTML = `<p>We do not have any books in that category</p>`
    }
} 
showBooks('all')

// showBooks('003', true)

let allTabs = document.querySelectorAll('.tab')
allTabs.forEach(tab => {
    tab.onclick = () => {
        allTabs.forEach(tab => tab.classList.remove('active'))
        tab.classList.add('active')
        if (tab.innerHTML === 'all') {
            showBooks(tab.innerHTML)
        } else {
            showBooks(tab.innerHTML.toLowerCase())
        }
    }
})


// search 
let searchInput = document.querySelector('#search-input');
searchInput.oninput = (evt)  => {
    showBooks(evt.target.value, true )
}

// get all rent buttons 

let rentBtns = document.querySelectorAll('.rent')
rentBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // select parent element
        let bookId = btn.parentElement.id;
        let book = bookStore.find(book => book.id === bookId);
        let otherBooks = bookStore.filter(book => book.id !== bookId)
        if (book.isAvailable) {
            alert('this book is available. you may borrow the book.')
            book.isAvailable = false
            bookStore.concat(otherBooks, book)
            btn.style.background = 'tomato'
        } else{
            btn.style.background = 'tomato'
            alert('this book is not available at the moment.please check back at a later time')
        }
    })
})

// adding to wishlist 

let wishlist = [];
let allAddBtns = document.querySelectorAll('.add');
allAddBtns.forEach( btn => {
    btn.addEventListener('click', () => {
        if (btn.innerHTML.includes('Add to wishlist')) {
            btn.innerHTML = 'Added to your wishlist '
            btn.style.background = 'red'
        } else {
            btn.innerHTML = 'Add to wishlist'
        }
    })
})

fetch('https://kitsu.io/api/edge/anime')
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err))