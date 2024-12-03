import { useEffect } from "react";
import { useState } from "react";
import Book from "../Book/Book";
import './Books.css'

const Books = () => {
    const [books, setBooks] = useState([]);
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
                    books.map(book => <Book key={book.bookId} book={book} ></Book> )
                }
            </div>
        </div>
    );
};

export default Books;