import { IoSearchSharp } from "react-icons/io5"

const HeaderSec = () => {
    return (
        <>
           <section className="w-full bg-[#F3ADC9] items-center p-5">
                <div className="">
                    <h1 className="font-extrabold text-[25px]">Find your dream job</h1>
                    <small>Looking for jobs? Browse our latest job opening to view.</small>
                </div>
           </section>
           <section className="w-full items-center p-4 flex " >
                <div className="w-sm  p-2  flex items-center border border-gray-300">
                    <IoSearchSharp className="text-[20px] font-light text-gray-400" />
                    <input className="w-full outline-0" type="text" placeholder="Search job" style={{marginLeft:"10px"}} />
                </div>
           </section>
        </>
    )
}
export default HeaderSec