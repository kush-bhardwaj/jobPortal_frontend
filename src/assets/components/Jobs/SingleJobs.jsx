import '../Main/main.css'
import { LogoUrl } from '../../utils/Url'
import {IoSparklesSharp } from "react-icons/io5"
import { useParams } from "react-router-dom"
export default function JobDetails() {
    const { id } = useParams()
    return (
        <>
            <section className='w-full bg-white border border-white rounded-2xl h-[80vh] overflow-auto overflow-x-hidden'>
                <div className='w-full  p-4 flex flex-col gap-4'>
                    <div className='w-full flex flex-row items-center   border-b-1 border-b-gray-300 p-4'>
                        <div className='flex  w-[10%] '><img src={`${LogoUrl}twitter.png`}></img></div>
                        <div className='w-[70%] p-5 '>
                            <h1 className='flex font-bold text-2xl'>Product Desinger <IoSparklesSharp className="text-blue-500 font-bold ml-2"style={{marginLeft:"5px"}} /></h1>
                            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed repellendus laboriosam quod impedit. Alias aperiam repellat deserunt! Placeat eius quos distinctio cumque eaque doloribus sed consequatur aut, asperiores quidem sit.</p>
                        </div>
                        <div className='w-[20%] flex justify-between  p-2'>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">Apply Now </button>
                            <button class="bg-white text-blue-500 border border-blue-500 px-4 py-2 rounded cursor-pointer">
                                Save
                            </button>
                        </div>
                    </div>
                    <div className='w-full flex flex-row items-center   border-b-1 border-b-gray-300 p-4'>
                        <div className='flex  w-[10%] '><img src={`${LogoUrl}twitter.png`}></img></div>
                        <div className='w-[70%] p-5 '>
                            <h1 className='flex font-bold text-2xl'>Product Desinger <IoSparklesSharp className="text-blue-500 font-bold ml-2"style={{marginLeft:"5px"}} /></h1>
                            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed repellendus laboriosam quod impedit. Alias aperiam repellat deserunt! Placeat eius quos distinctio cumque eaque doloribus sed consequatur aut, asperiores quidem sit.</p>
                        </div>
                        <div className='w-[20%] flex justify-between  p-2'>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">Apply Now </button>
                            <button class="bg-white text-blue-500 border border-blue-500 px-4 py-2 rounded cursor-pointer">
                                Save
                            </button>
                        </div>
                    </div>
                    <div className='w-full flex flex-row items-center   border-b-1 border-b-gray-300 p-4'>
                        <div className='flex  w-[10%] '><img src={`${LogoUrl}twitter.png`}></img></div>
                        <div className='w-[70%] p-5 '>
                            <h1 className='flex font-bold text-2xl'>Product Desinger <IoSparklesSharp className="text-blue-500 font-bold ml-2"style={{marginLeft:"5px"}} /></h1>
                            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed repellendus laboriosam quod impedit. Alias aperiam repellat deserunt! Placeat eius quos distinctio cumque eaque doloribus sed consequatur aut, asperiores quidem sit.</p>
                        </div>
                        <div className='w-[20%] flex justify-between  p-2'>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">Apply Now </button>
                            <button class="bg-white text-blue-500 border border-blue-500 px-4 py-2 rounded cursor-pointer">
                                Save
                            </button>
                        </div>
                    </div>
                    <div className='w-full flex flex-row items-center   border-b-1 border-b-gray-300 p-4'>
                        <div className='flex  w-[10%] '><img src={`${LogoUrl}twitter.png`}></img></div>
                        <div className='w-[70%] p-5 '>
                            <h1 className='flex font-bold text-2xl'>Product Desinger <IoSparklesSharp className="text-blue-500 font-bold ml-2"style={{marginLeft:"5px"}} /></h1>
                            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed repellendus laboriosam quod impedit. Alias aperiam repellat deserunt! Placeat eius quos distinctio cumque eaque doloribus sed consequatur aut, asperiores quidem sit.</p>
                        </div>
                        <div className='w-[20%] flex justify-between  p-2'>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">Apply Now </button>
                            <button class="bg-white text-blue-500 border border-blue-500 px-4 py-2 rounded cursor-pointer">
                                Save
                            </button>
                        </div>
                    </div>
                    <div className='w-full flex flex-row items-center   border-b-1 border-b-gray-300 p-4'>
                        <div className='flex  w-[10%] '><img src={`${LogoUrl}twitter.png`}></img></div>
                        <div className='w-[70%] p-5 '>
                            <h1 className='flex font-bold text-2xl'>Product Desinger <IoSparklesSharp className="text-blue-500 font-bold ml-2"style={{marginLeft:"5px"}} /></h1>
                            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed repellendus laboriosam quod impedit. Alias aperiam repellat deserunt! Placeat eius quos distinctio cumque eaque doloribus sed consequatur aut, asperiores quidem sit.</p>
                        </div>
                        <div className='w-[20%] flex justify-between  p-2'>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">Apply Now </button>
                            <button class="bg-white text-blue-500 border border-blue-500 px-4 py-2 rounded cursor-pointer">
                                Save
                            </button>
                        </div>
                    </div>


                   
                </div>

            </section>
        </>
    )
};