import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    const links = <>
        <nav className="flex gap-4 ">
            <li className="hover:underline hover:text-lime-600"><NavLink to={'/'} ><a>Home</a></NavLink></li>
            <li className="hover:underline hover:text-lime-600"> <NavLink to={'/listed'} >Listed Books</NavLink> </li>
            <li className="hover:underline hover:text-lime-600"> <NavLink to={'/pages'} >Pages to Read</NavLink> </li>
        </nav>
    </>
    return (
        <div className="navbar bg-base-100 mt-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box  mt-3 w-52 p-2 shadow">

                        {links}
                    </ul>
                </div>
                <a className="text-3xl protest-revolution-regular flex">
                    <img className="mr-2" width={'30px'} src="https://i.ibb.co.com/w4M0gMP/book.png" alt="" />
                    <span>BookSelf</span>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-3">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-[#30cf1b] text-white hover:shadow-xl
                hover:shadow-[#92f38f] hover:border hover:border-[#51ad48] 
                hover:bg-lime-200 hover:text-[#30cf1b]">Sign In</a>
                <a className="btn bg-[#30a3d8] text-white hover:shadow-xl
                hover:shadow-[#8fc3f3] hover:border hover:border-[#30a3d8] 
                hover:bg-sky-200 hover:text-[#30a3d8] ml-3">Sign Up</a>
                
            </div>
        </div>
    );
};

export default Header;