import './SideBar.css';
import { Link } from 'react-router';

const SideBar = () => {
    return (
        <div>
            <div className="sidebar">
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/dashboard/users">Users</Link>
                <Link to="/dashboard/settings">Settings</Link>
            </div>
        </div>
    )
}

export default SideBar;