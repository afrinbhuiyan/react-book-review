import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { seveBookApplication } from "../../Utility/localStorage";
// import { AiFillCheckCircle } from "react-icons/ai";


const BookDetails = () => {
    const books = useLoaderData();
    const { bookId } = useParams()
    const idInt = parseInt(bookId)
    const book = books.find(book => book.bookId === idInt);
    console.log(book)

    const handleApplyBook = () => {
        seveBookApplication(idInt)
        toast.success('Books Added to Read List')
    }

    return (
        <div className="mt-20 flex gap-10">
            <div className="bg-[#1111] p-7 rounded-lg flex-1 flex items-center justify-center">
                <img width={'400px'} src={book.image} alt="" />
            </div>
            <div className="flex-1">
                <h1 className="text-3xl font-bold mb-3"> {book.bookName} </h1>
                <p> By : {book.author} </p>
                <p className="border-t pt-3 border-b pb-3 mt-2"> {book.category} </p>
                <p> <span className="font-bold" >Review :</span> <small>{book.review}</small> </p>
                <p className=" border-b pb-3 mb-2"> <span className="font-bold">Tags</span>
                    <span className="text-[#35c428]" >
                        <span className="mx-4">#{book.tags[0]}</span>
                        <span className="mr-4">#{book.tags[1]}</span>
                        <span>#{book.tags[2]}</span></span> </p>
                <div className="flex gap-16">
                    <div className="text-[#1111118c] ">
                        <p>Number of pages : </p>
                        <p>Publisher : </p>
                        <p>Year of publishing : </p>
                        <p>Rating : </p>
                    </div>
                    <div className="font-semibold">
                        <p>{book.totalPages}</p>
                        <p>{book.publisher}</p>
                        <p>{book.yearOfPublishing}</p>
                        <p>{book.rating}</p>
                    </div>
                </div>
                <div className="mt-4">
                    <button onClick={handleApplyBook} className="btn border-[#1d8626] text-[#1d8626] 
                    hover:bg-lime-600 hover:text-[#ffff] 
                    hover:shadow-xl hover:shadow-[#608150]
                    ">Read</button>
                    <button className="btn bg-[#30a3d8] text-white hover:shadow-xl
                    hover:shadow-[#8fc3f3] hover:border hover:border-[#30a3d8] 
                    hover:bg-sky-100 hover:text-[#30a3d8] ml-3">
                    Wishlist </button>
                </div>
            </div>
            <ToastContainer stacked />
        </div>
    );
};

export default BookDetails;