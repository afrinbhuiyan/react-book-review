
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBookApplication } from "../../Utility/localStorage";
import ListedBook from "../ListedBook/ListedBook";

const ListedBooks = () => {
    const books = useLoaderData();
    
    const [listedBooks, setListedBooks] = useState([])
    const [listedBookLength, setListedBookLength] = useState([0])

    useEffect(() => {
        const storedBookIds = getStoredBookApplication();
        if(books.length > 0){
            // const booksListed = books.filter(book => storedBookIds.includes(book.bookId) );
            const booksListed = [];
            for(const id of storedBookIds){
                const book = books.find(book => book.bookId === id )
                if(book){
                    booksListed.push(book)
                }
            }

            setListedBooks(booksListed)
            // console.log(books, storedBookIds, booksListed)
        }
    }, [])
    return (
        <div>
            <h1 className="flex justify-center items-center text-4xl font-bold mt-10 lobster-regular mb-10"
            >Bo <img className="mr-2" width={'30px'} src="https://i.ibb.co.com/w4M0gMP/book.png" alt="" />ks: {listedBooks.length} </h1>
            <button onClick={() => setListedBookLength(listedBooks.length)} >Read</button>
            <div>
                {
                    listedBooks.slice(0, listedBookLength).map(book => <ListedBook key={book.bookId} book={book}  ></ListedBook> )
                }
            </div>
            
        </div>
    );
};

export default ListedBooks;