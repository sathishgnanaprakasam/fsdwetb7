import { Link } from "react-router";

const Register = () => {
    return (
        <div>
            <h1>Register</h1>
            <form>
                <input type="text" placeholder="Name..." />
                <input type="text" placeholder="Username..." />
                <input type="password" placeholder="Password..." />
                <button type="submit">Register</button>
            </form>
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
    )
}

export default Register;