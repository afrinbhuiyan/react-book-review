import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBookApplication } from "../../Utility/localStorage";
import { useState } from "react";

const ListedBooks = () => {
    const books = useLoaderData();
    const [listedBooks, setListedBooks] = useState([])

    useEffect(() => {
        const storedBookIds = getStoredBookApplication();
        if(books.length > 0 ){
            const booksListed = [];
            for(const id of booksListed){
                const book = books.find(book => book.bookId === id);
                if(book){
                    booksListed.push(book)
                }
            }
            setListedBooks(storedBookIds)
        }
    }, [books])

    return (
        <div>
            <h1 className="flex justify-center items-center text-4xl font-bold mt-10 lobster-regular mb-10"
            >Bo <img className="mr-2" width={'30px'} src="https://i.ibb.co.com/w4M0gMP/book.png" alt="" />ks: {listedBooks.length}</h1>
        </div>
    );
};

export default ListedBooks;