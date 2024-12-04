import './Banner.css'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="bg-[#1111] flex justify-between px-12 py-20 rounded-2xl mt-20">
            <div className='my-auto'>
               <h1 className="text-5xl roboto-bold-italic">Books to freshen up <br /> your <span className='text-lime-600'>bookshelf</span></h1>
               <p className='dancing-script-uniquifier mt-5'>You can find any kind of Books with <br /> the best price. Join us, for a special offer</p>
               <Link to={'/listed'} >
               <button className='btn bg-[#30cf1b] text-white hover:shadow-xl
                hover:shadow-[#92f38f] hover:border hover:border-[#51ad48] 
                hover:bg-lime-200 hover:text-[#30cf1b] mt-7'>View The List</button>
               </Link>
            </div>
            <div>
               <img className="rounded-2xl" width={'500px'} 
               src="https://i.ibb.co.com/25DDSN0/book-with-tree-digital-art-style-education-day.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;