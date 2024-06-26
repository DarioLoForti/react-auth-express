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

const {isLoggedIn, logout, user} = useAuth();

    return (
        <header>
            <nav className="navbar">
                <menu>
                    {urlPages.map( ({label, href}, i) => (
                        <li key={`urlPage${i}`}>
                            <NavLink to={href}>{label}</NavLink>
                        </li>
                    ))}
                    {!isLoggedIn && <>
                        <li>
                            <NavLink to={`/login`}>Login</NavLink>
                        </li>
                        <li>
                            <NavLink to={`/register`}>Register</NavLink>
                        </li>
                    </>}
                    {isLoggedIn &&
                        
                            <div className="avatar">
                                {user.image_path &&
                                    <figure>
                                        <img src={user.image_path} alt={user.name} />
                                    </figure>
                                }
                                {user.name && <h3>{user.name}</h3>}
                                <button onClick={logout}>Logout</button>
                            </div>
                        
                    }
                </menu>
            </nav>
        </header>
    )
}