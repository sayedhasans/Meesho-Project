import Image from "../images/meesho-logo-freelogovectors.net_.png"
import { CiSearch } from "react-icons/ci";
import { TfiMobile } from "react-icons/tfi";
import { BsPerson } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import Image2 from "../images/playstore-icon-big.png"
import Image3 from "../images/appstore-icon-big.png"
import { PiBag } from "react-icons/pi";
import { Link } from "react-router-dom";

function Navbar({len}){
    return(
       <div className="flex p-1 justify-evenly sticky top-0 bg-white ">
        <div dir="ltr" className="flex  items-center relative">
            <Link to = "/"><img src={Image}  alt="" className="h-[50px] sm:h-[100px] pe-8"/></Link>
            <CiSearch className=" hidden sm:block text-3xl absolute left-[205px] text-gray-400"/>
            <input type="text" placeholder="Try Saree,Kurti or Search by Product Code" className="w-[80px] sm:w-[400px] p-3 sm:px-12 outline-none border-2 border-gray-400 rounded-md" />
            </div>
            <div className="hidden sm:flex items-center gap-4 text-lg relative ">
            <div className="group flex items-center gap-4 text-lg hover:text-pink-700 hover:border-b-2 border-pink-700  ">
            <TfiMobile className=" sm:hidden md:hidden lg:block gap-5"/>
            <a href="https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow"><p className="border-r-2 border-gray-400 p-2  ">Download App</p></a>
            <div className=" hidden lg:group-hover:block absolute top-36 bg-white p-6 z-50 border-2 ">
                <p className="text-gray-800 mb-3">Download From</p>
                <img src={Image2} alt="gplay" className="h-10  " />
                <img src={Image3} alt="appplay" className="h-10 mt-3" />
            </div>
            </div>
            <a href="https://supplier.meesho.com/?utm_source=meesho&utm_medium=website&utm_campaign=header"><p className="sm:hidden md:hidden lg:block border-r-2 border-gray-400 p-2">Become a Supplier</p></a>
            <a href="https://www.meesho.io/news"><p className="sm:hidden md:hidden lg:block border-r-2 border-gray-400 p-2">Newsroom</p></a>
            </div>
            <div className=" hidden group relative sm:flex  flex-col items-center justify-center text-lg hover:text-pink-700 hover:border-b-2 border-pink-700">
                <p><BsPerson /></p>
                <p>Profile</p>
                <div className=" hidden lg:group-hover:block bg-white  absolute top-36 w-[250px] z-50 border-2">
                    <div className="flex flex-col p-5 gap-2 text-black">
                        <p>Hello User</p>
                    <p className="text-sm">To access your Meesho account</p>
                    <button className="border-none bg-pink-600 text-white p-4 rounded-md">Sign Up</button>
                    <div className="flex items-center gap-3 border-t-2  pt-3">
                    <PiBag/> <p> My Orders</p>
                    </div>
                    </div>
                </div>
            </div>
            <div dir="rtl" className="flex  flex-col items-center justify-center text-lg tex-lg">
                <p ><BsCart /></p>
                <Link to ="/cart"> <span className="absolute text-red-500 sm:bg-pink-200 p-1 sm:border-2 text-sm sm:absolute top-2 rounded-full">{len}</span>Cart</Link>
            </div>

       </div>
    )
}
export default Navbar;