import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

export default function(){

    const { login } = useAuth();

    const handleLogin = e => {
        e.preventDefault();
        login();
    }

    return(<>
        <form onSubmit={handleLogin}>
        <label> Email </label>
            <input 
                type="text"
                placeholder="Email" 
            />
            <label> Password </label>
            <input 
                type="password"
                placeholder="Password" 
            />
            <button>Login</button>
        </form>

        <div className="signIn">
            <h3>
            don't have an account? <Link to="/register">Register</Link>
            </h3>
        </div>
    </>)

}