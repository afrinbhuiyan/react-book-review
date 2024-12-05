import { IoLocationOutline } from "react-icons/io5";
import { IoPeopleOutline} from "react-icons/io5";


const ListedBook = ({ book }) => {
    const { image, bookName, author, tags, yearOfPublishing, publisher, totalPages, category, rating } = book;

    return (
        <div className="flex gap-10 my-10">
            <div className="bg-[#1111] py-10 px-6 rounded-2xl  w-1/3
             flex justify-center items-center">
                <img className="text-center" width={'120px'} src={image} alt="" />
            </div>
            <div className="w-2/3 flex flex-col justify-center">
                <h1 className="text-2xl roboto-bold-italic "> {bookName} </h1>
                <p className="text-[#0d0e0db2] font-medium mt-3">By : {author}</p>
                <div className="flex items-center mt-3">
                    <h3> <span className="font-bold">Tag</span>
                        <span className="text-[#70db32] mx-5" >#{tags[0]}</span>
                        <span className="text-[#70db32] mr-5">#{tags[1]}</span>
                        <span className="text-[#70db32]">#{tags[2]}</span></h3>
                    <p className="text-[#111111c9] flex items-center ml-6">
                        <IoLocationOutline className="mr-2 text-[22px]"></IoLocationOutline>
                        Year of Publishing : {yearOfPublishing} </p>
                </div>
                <div className="flex gap-7 mt-3">
                    <p className="flex items-center text-[#1111117a]">
                        <IoPeopleOutline className="text-[20px] mr-2 " ></IoPeopleOutline> Publisher: {publisher}</p>
                    <p className="flex items-center text-[#1111117a]"> 
                        <img className="mr-2" width={'20px'} src="https://i.ibb.co.com/zHJGNnm/page.png" alt="" /> 
                        <span>Pages {totalPages} </span></p>
                </div>
                <div className="flex gap-7 border-t pt-3 mt-3">
                   <button className="py-2 px-7 bg-[#1c77df3f] text-[#348ef5] rounded-full"> Category: {category} </button>
                   <button className="py-2 px-7 bg-[#ffad3348] text-[#FFAC33] rounded-full"> Rating: {rating} </button>
                   <button className="py-2 px-7 bg-[#30cf1b] text-[#ffff] rounded-full">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ListedBook;