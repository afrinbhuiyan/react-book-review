import { IoStarHalf } from "react-icons/io5";

const Book = ({book}) => {
    const {image, bookName, tags, author, category, rating} = book;
    return (
        <div className="border p-6 rounded-2xl hover:shadow-xl hover:shadow-[#1111113f]">
            <div className="bg-[#1111] py-6 flex justify-center rounded-2xl">
            <img width={'150px'} src={image} alt="" />
            </div>
            <div className="flex gap-4">
            <p className="text-[#35e43d]"> #{tags[0]} </p>
            <p className="text-[#35e43d]"> #{tags[1]} </p>
            <p className="text-[#35e43d]"> #{tags[2]} </p>
            </div>
            <h2 className="text-[20px] font-bold"> {bookName} </h2>
            <p>By : {author} </p>
            <div className="flex justify-between border-t border-dashed pt-3 mt-3">
                <p>{category}</p>
                <p className="flex items-center"> <IoStarHalf className="text-[#30d430] mr-3 "></IoStarHalf> {rating}</p>
            </div>
        </div>
    );
};

export default Book;

