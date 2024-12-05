
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBookApplication } from "../../Utility/localStorage";
import ListedBook from "../ListedBook/ListedBook";
import WishlistBooks from "../WishlistBooks/WishlistBooks";

const ListedBooks = () => {
    const books = useLoaderData();

    const [listedBooks, setListedBooks] = useState([])
    const [showListedBooks, setShowListedBooks] = useState(false);
    const [wishListBooks, setWishListBooks] = useState([])
    const [showWishListBooks, setShowWishListBooks] = useState(false);

    useEffect(() => {
        const storedBookIds = getStoredBookApplication();
        if (books.length > 0) {
            // const booksListed = books.filter(book => storedBookIds.includes(book.bookId) );
            const booksListed = [];
            for (const id of storedBookIds) {
                const book = books.find(book => book.bookId === id)
                if (book) {
                    booksListed.push(book)
                }
            }

            setListedBooks(booksListed)
            // console.log(books, storedBookIds, booksListed)
        }
    }, [books])

    useEffect(() => {
        const storedWishIds = getStoredBookApplication();
        if (books.length > 0) {
            const booksWishlist = [];
            for (const id of storedWishIds) {
                const book = books.find(book => book.bookId === id)
                if (book) {
                    booksWishlist.push(book)
                }
            }
            setWishListBooks(booksWishlist)
        }
    }, [books])

    return (
        <div>
            <h1 className="flex justify-center items-center text-4xl font-bold mt-10 lobster-regular mb-10"
            >Bo <img className="mr-2" width={'30px'} src="https://i.ibb.co.com/w4M0gMP/book.png" alt="" />ks</h1>
            <div className="flex gap-5">
                {/* <button className="border px-6 py-2 " onClick={() => setListedBookLength(listedBooks.length, !listedBookLength)} >
                    Read</button> */}
                <button className="border px-6 py-2 " onClick={() => setShowListedBooks(!showListedBooks)} >
                {showListedBooks ? "Hide Listed Books" : "Show Listed Books"}
                    </button>
                <button className="border px-6 py-2"  onClick={() => setShowWishListBooks(!showWishListBooks)} >WishList</button>
            </div>

            <div className={`${!showListedBooks === true ? 'mt-1' : 'hidden' }`}>
                {
                    listedBooks.map(book => <ListedBook key={book.bookId} book={book}  ></ListedBook>)
                }
            </div>

            <div className={`${!showWishListBooks === true ? 'mt-1' : 'hidden' }`}>
                {
                    wishListBooks.map(book => <WishlistBooks key={book.bookId} book={book} ></WishlistBooks>)
                }
            </div>

        </div>
    );
};

export default ListedBooks;





