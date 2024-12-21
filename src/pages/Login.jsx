import { Link } from "react-router";

const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <form>
                <input type="text" placeholder="Username..." />
                <input type="password" placeholder="Password..." />
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <Link to="/register">Register</Link></p>
        </div>
    )
}

export default Login;