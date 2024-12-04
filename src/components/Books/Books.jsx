import { useEffect } from "react";
import { useState } from "react";
import Book from "../Book/Book";
import './Books.css'

const Books = () => {
    const [books, setBooks] = useState([]);
    const [bookLength, setBookLength] = useState([6])
    useEffect(() => {
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])
    return (
        <div>
            <h1 className="flex justify-center items-center text-4xl font-bold mt-10 lobster-regular mb-10"
            >Bo <img className="mr-2" width={'30px'} src="https://i.ibb.co.com/w4M0gMP/book.png" alt="" />ks</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    books.slice(0, bookLength).map(book => <Book key={book.bookId} book={book} ></Book> )
                }
            </div>
            <div className={bookLength === books.length ? 'hidden' : 'flex justify-center my-10' }>
                <button 
                onClick={() => setBookLength(books.length)}
                className="btn bg-[#30cf1b] text-white hover:shadow-xl
                hover:shadow-[#92f38f] hover:border hover:border-[#51ad48] 
                hover:bg-lime-200 hover:text-[#30cf1b]" >show all book</button>
            </div>
        </div>
    );
};

export default Books;