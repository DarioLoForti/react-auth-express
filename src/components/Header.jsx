import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const urlPages = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'Posts',
        href: '/posts'
    }
]

export default function(){

const {isLoggedIn, logout} = useAuth();

    return (
        <header>
            <nav className="navbar">
                <menu>
                    {urlPages.map( ({label, href}, i) => (
                        <li key={`urlPage${i}`}>
                            <NavLink to={href}>{label}</NavLink>
                        </li>
                    ))}
                    {!isLoggedIn && 
                    <li>
                        <NavLink to="/login">Login</NavLink>
                    </li>
                    }
                    {isLoggedIn &&
                    <li>
                        <button onClick={logout}>Logout</button>
                    </li>
                    }
                </menu>
            </nav>
        </header>
    )
}