import { Outlet } from "react-router";

const Layout = () => {
    return (
        <div>
            <h1>Layout</h1>
            <p>Welcome to the layout</p>
            <Outlet />
        </div>
    )
}

export default Layout;