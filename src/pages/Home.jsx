import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function(){

    const {isLoggedIn, logout} = useAuth();

    return (<>
        <div className="homepage">
            <h1>Home Page</h1>
            {!isLoggedIn && <h3>To post you must first log in</h3>}
            <Link to="create">Create a new post</Link>
        </div>
    </>)
}