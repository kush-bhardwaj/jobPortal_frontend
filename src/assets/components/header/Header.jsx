import '../Main/main.css'
import { IoNotificationsSharp, IoSearchSharp } from "react-icons/io5";
import HeaderSec from "./Header2";

const MainHeader = () => {
    return (

        <>
            <nav className="w-full  p-2 flex justify-center items-center">
            <div className="w-full flex items-center">
                <div className='w-[10%] cursor-pointer '><img src="http://localhost:5173/public/jobify.png"></img></div>
                <div className='w-[70%] flex justify-end'>
                    <div className="w-[80%] flex  justify-center">
                        <ul className="flex">
                        <li className="  m-5 cursor-pointer font-[500] p-5 text-[17px] transition  hover:underline text-[#F3ADC9] underline">Home</li>
                        <li className="  m-5 cursor-pointer font-[500] p-5 text-[17px] transition  hover:underline hover:text-[#F3ADC9]">About Company</li>
                        <li className="  m-5 cursor-pointer font-[500] p-5 text-[17px] transition  hover:underline hover:text-[#F3ADC9]">Careers</li>
                        <li className="  m-5 cursor-pointer font-[500] p-5 text-[17px] transition  hover:underline hover:text-[#F3ADC9]">Features</li>
                        <li className="  m-5 cursor-pointer font-[500] p-5 text-[17px] transition  hover:underline hover:text-[#F3ADC9]">Contact Us</li>
                    </ul></div>
                    <div className=" w-[6%] flex items-center  justify-between ">
                        <IoNotificationsSharp className="text-[23px] m-2  transition cursor-pointer hover:text-[#F3ADC9]" />
                    </div>
                </div>
                <div className='w-[15%] flex justify-end  items-center '>
                    <div className="w-[22%] ">
                        <img src="http://localhost:5173/public/user.png" alt="" className="w-full border-0 rounded-full" />
                    </div>
                    <div className="p-2">
                        <small className="font-bold">Enterprise</small>
                        <h4 className="font-extrabold">Kush Bhardwaj</h4>
                    </div>
                </div>
            </div>
        </nav>
        <HeaderSec/>
        </>
    )
}
export default MainHeader;