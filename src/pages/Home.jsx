import { useNavigate } from 'react-router';
import './Home.css';

const Home = () => {

    const navigate = useNavigate();

    const toRegister = () => {
        navigate('/register');
    }

    const toLogin = () => {
        navigate('/login');
    }

    return (
        <div>
            <h1>Home</h1>
            <p>Welcome to the home page!</p>
            <div className="buttons">
                <button onClick={toRegister}>Register</button>
                <button onClick={toLogin}>Login</button>
            </div>
        </div>
    )
}

export default Home;