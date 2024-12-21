import { Outlet } from "react-router";
import SideBar from "../components/SideBar";
import './DashboardLayout.css';

const DashboardLayout = () => {
    return (
        <div className="dashboard">
            <div id="sidebar">
                <SideBar />
            </div>
            <div id="main">
                <Outlet />
            </div>
        </div>
    )
}

export default DashboardLayout;