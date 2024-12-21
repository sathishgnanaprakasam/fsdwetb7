import { Outlet } from "react-router";
import NavBar from "../components/NavBar";

const Layout = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
        </div>
    )
}

export default Layout;