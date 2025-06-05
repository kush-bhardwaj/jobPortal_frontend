import '../Main/main.css'
import { Outlet } from "react-router-dom";
import Main from "../Main/Main";
import DashboardJobs from "./DashboardMenu";

const Dashboard = () => {
    return (
        <>
            <Main>

                <section className="flex bg-gray-100 p-2">
                        <div className="w-[30%] " style={{maxHeight:"80vh",overflow:"auto", overflowX:'hidden'}}><DashboardJobs /></div>
                     <div className="p-2 w-full">
                        <Outlet />
                        </div>
                </section>
               

            </Main>
        </>
    )
}
export default Dashboard;