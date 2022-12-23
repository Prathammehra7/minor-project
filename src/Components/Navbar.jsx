import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { MdOutlineClose } from 'react-icons/md'
import Logo from '../Image/logo.png'
// import { links } from '../data'
// import { login } from '../data'
import { GoThreeBars } from 'react-icons/go'
import './Navbar.css'

const Navbar = () => {
    const items = document.querySelectorAll("ul li");
    items.forEach((item) => {
        item.addEventListener("click", () => {
            document.querySelector("li.active").classList.remove("active");
            item.classList.add("active");
        });
    });
    
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        }
        else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)


    const [isNavShowing, setIsNavShowing] = useState(false);

    return (
        <nav className={color ? 'nav nav-bg' : 'nav'}>
            <div className="container nav__container">
                <Link to='/' className='logo'>
                    <img src={Logo} alt="Nav logo" />
                </Link>
                <ul className={` nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}   >
                    {/* {
                        links.map(({ name, icon, path }, index) => {
                            return (
                                <li key={index}>
                                    <NavLink to={path} className={({ isActive }) => isActive ? 'active-nav' : ''}
                                        onClick={() => setIsNavShowing(prev => !prev)}>  
                                        {name} 
                                        </NavLink>
                                    <div className="icon">
                                        {icon}
                                    </div>  
                                    </li>
                                )
                            })
                            
                        } */}
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li> 
                        <li><a href="/plans">Plans</a></li>
                        <li  className='login'><a href="/login">Login</a></li>
                   
                </ul>

            
                <button className="nav__toggle-btn" onClick={() => setIsNavShowing(prev => !prev)}>
                    {
                        isNavShowing ? <MdOutlineClose /> : <GoThreeBars />
                    }
                </button>
            </div>
        </nav>
    )
}

export default Navbar