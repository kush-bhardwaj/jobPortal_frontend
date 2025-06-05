import '../Main/main.css'
import { GiConfirmed } from "react-icons/gi";
import { IoAdd, IoStar,IoSparklesSharp } from "react-icons/io5"
import { Link } from "react-router-dom";
import { LogoUrl } from '../../utils/Url';

export default function DashboardJobs() {
    const jobs = [
        { jobTitle: "Product Desinger", description: "Design and iterate intuitive idigtal products that delilght out users.", rating: '4.3 Trusted', applications: '23 Applications', verify: "Company Verified", logo: 'twitter.png' },
        { jobTitle: "Node.js Developer", description: "Design and iterate intuitive idigtal products that delilght out users.", rating: '4.3 Trusted', applications: '23 Applications', verify: "Company Verified", logo: 'accenture.png' },
        { jobTitle: "Product Desinger", description: "Design and iterate intuitive idigtal products that delilght out users.", rating: '4.3 Trusted', applications: '23 Applications', verify: "Company Verified", logo: 'psi.webp' },
        { jobTitle: "Product Desinger", description: "Design and iterate intuitive idigtal products that delilght out users.", rating: '4.3 Trusted', applications: '23 Applications', verify: "Company Verified", logo: 'twitter.png' },
        { jobTitle: "Product Desinger", description: "Design and iterate intuitive idigtal products that delilght out users.", rating: '4.3 Trusted', applications: '23 Applications', verify: "Company Verified", logo: 'accenture.png' },
        { jobTitle: "Product Desinger", description: "Design and iterate intuitive idigtal products that delilght out users.", rating: '4.3 Trusted', applications: '23 Applications', verify: "Company Verified", logo: 'psi.webp' },
        { jobTitle: "Product Desinger", description: "Design and iterate intuitive idigtal products that delilght out users.", rating: '4.3 Trusted', applications: '23 Applications', verify: "Company Verified", logo: 'twitter.png' },
        { jobTitle: "Product Desinger", description: "Design and iterate intuitive idigtal products that delilght out users.", rating: '4.3 Trusted', applications: '23 Applications', verify: "Company Verified", logo: 'accenture.png' },
        { jobTitle: "Product Desinger", description: "Design and iterate intuitive idigtal products that delilght out users.", rating: '4.3 Trusted', applications: '23 Applications', verify: "Company Verified", logo: 'psi.webp' },
        { jobTitle: "Product Desinger", description: "Design and iterate intuitive idigtal products that delilght out users.", rating: '4.3 Trusted', applications: '23 Applications', verify: "Company Verified", logo: 'twitter.png' },

    ]
    return (
        <>
            <section className="w-full flex">
                <div className="w-full overflow-hidden" >
                    {jobs.map((e, pos) =>
                        <Link key={pos} to={`job/${e?.jobTitle}`}>
                            <div className="w-[95%] flex flex-col bg-white items-center rounded cursor-pointer hover:shadow-2xl transition-all" style={{ margin: "10px" }} >
                                <div className="flex items-center" style={{ margin: "10px", padding: "5px" }}>
                                    <img src={`${LogoUrl}${e?.logo}`} className="w-[10%] h-[8%]" style={{ marginRight: "10px" }}></img>
                                    <div><h1 className="flex" >{e?.jobTitle}<IoSparklesSharp className="text-blue-500 font-bold ml-2"style={{marginLeft:"5px"}} /></h1>
                                        <small style={{ color: "red", fontSize: "12px", lineHeight: "15px", color: "gray", textAlign: "justify" }}>{e?.description}</small></div>
                                </div>
                                <div className="flex w-full justify-between items-center p-2 border-t border-dashed border-gray-500 text-[12px]" >
                                    <small className="flex p-0.5"> <IoStar className="text-[12px] text-[#F99845]" />{e?.rating}</small>
                                    <small>{e?.applications}</small>
                                    <small className="flex items-center"><GiConfirmed style={{ marginRight: "5px", color: "#216EE8" }} />{e?.verify}</small>
                                </div>
                            </div></Link>
                    )}
                </div>
            </section>
        </>
    )
}