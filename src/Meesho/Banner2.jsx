import Image from "../images/1678691686252_400.webp"
import Image2 from "../images/1678691699680_300.webp"
import Image3 from "../images/1678691712594_299.webp"
import Image4 from "../images/1678691846068_200.webp"
import Image5 from "../images/1678691832099_201.webp"
import Image6 from "../images/1678691796046_202.webp"
import Image7 from "../images/1678691960553_203.webp"
import Image8 from "../images/1678691936892_205.webp"
import Image9 from "../images/1678691925419_206.webp"
function Banner2(){
    return(
        <div className="flex flex-col justify-center items-center  ">
                <p className="text-4xl text-gray-800 font-semibold p-10 ">Top Categories to choose from</p>
                <div className=" w-[420px] sm:grid p-5 sm:w-[85%]  gap-16 space-y-16">
                <div className="sm:flex pt-14 bg-gradient-to-b from-orange-200 to-gray-200 rounded-md">
                    
                <a href="https://www.meesho.com/women-store/pl/3g5o"><img src={Image} alt="1" className=" p-5" /></a>
                <div className="md:flex-col ">
                    <p className=" text-xl sm:p-10 font-bold sm:text-5xl pl-36  ">Be fashion forward</p>
                    <div className=" lg:flex justify-evenly gap-10 pl-24 pt-10">
                    <a href="https://www.meesho.com/men-store/pl/3g5p"><img src={Image2} alt="2" className="w-[200px] sm:w-full "/></a>
                    <a href="https://www.meesho.com/kids-store/pl/3g5q"><img src={Image3} alt="3" className="w-[200px] sm:w-full  " /></a>
                    </div>
                </div>
                </div>

                <div className=" sm:flex justify-evenly  bg-gradient-to-t from-orange-200 to-gray-200 rounded-md">
                    <div className=" flex flex-col items-center justify-center ">
                        <p className="text-6xl text-gray-900 font-bold p-5">Essentials</p>
                        <a href="https://www.meesho.com/essentials/pl/9ol"><button className=" sm:text-white bg-pink-600 rounded-md text-2xl p-3 px-10">View All</button></a>
                    </div>
                    <div className="flex gap-3">
                        <div className="flex flex-col items-center py-20">
                        <a href="https://www.meesho.com/home-decor/pl/3tl"><img src={Image4} alt="4" /></a>
                        <a href="https://www.meesho.com/home-decor/pl/3tl"><button className="bg-black text-white border-none rounded-md p-3 mt-3 ">Home Decor</button></a>
                        </div>
                        <div className="flex flex-col items-center py-20">
                        <a href="https://www.meesho.com/kitchen-accessories/pl/1i3z"><img src={Image5} alt="5" /></a>
                        <a href="https://www.meesho.com/kitchen-accessories/pl/1i3z"><button className="bg-black text-white border-none rounded-md p-3 mt-3 ">Kitchen Appliances</button></a>
                        </div>
                        <div className="flex flex-col items-center py-20">
                        <a href="https://www.meesho.com/skincare/pl/5kw"><img src={Image6} alt="6" /></a>               
                        <a href="https://www.meesho.com/skincare/pl/5kw"><button className="bg-black text-white border-none rounded-md p-3 mt-3 ">Health Care</button></a>
                        </div>
                    </div>

                </div>
                    
                <div className="sm:flex justify-evenly  bg-gradient-to-b from-orange-200 to-gray-100 rounded-md">
                    <div className="flex flex-col items-center justify-center ">
                        <p className="text-6xl text-gray-900 font-bold p-5">New styles</p>
                        <a href="https://www.meesho.com/electronics/pl/45g"><button className="text-white bg-pink-600 rounded-md text-2xl p-3 px-10">View All</button></a>
                    </div>
                    <div className="flex gap-3">
                        <div className="flex flex-col items-center py-20">
                        <a href="https://www.meesho.com/accessories/pl/1k5q"><img src={Image7} alt="7" /></a>
                        <a href="https://www.meesho.com/accessories/pl/1k5q"><button className="bg-black text-white border-none rounded-md p-3 mt-3 ">Accessories</button></a>
                        </div>
                        <div className="flex flex-col items-center py-20">
                        <a href="https://www.meesho.com/footwear/pl/3yb"><img src={Image8} alt="8" /></a>
                        <a href="https://www.meesho.com/footwear/pl/3yb"><button className="bg-black text-white border-none rounded-md p-3 mt-3 ">Footwear</button></a>
                        </div>
                        <div className="flex flex-col items-center py-20">
                        <a href="https://www.meesho.com/electronics/pl/45g"><img src={Image9} alt="9" /></a>
                        <a href="https://www.meesho.com/electronics/pl/45g"><button className="bg-black text-white border-none rounded-md p-3 mt-3 ">Electronics</button></a>
                        </div>
                    </div>

                </div>

                </div>
        </div>
    )
}
export default Banner2;