import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineClose } from 'react-icons/md'
import Logo from '../Image/logo.png'
import { GoThreeBars } from 'react-icons/go'
import { HiShoppingCart } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { HiOutlineChevronDown } from "react-icons/hi";
import { useCart } from "react-use-cart"
import './Navbar.css'

const Navbar = () => {
    const [name, setname] = useState();
    const [inout, setinout] = useState()
    const [inoutDirection, setDirection] = useState("/Login");

    useEffect(() => {
        let tokenval = localStorage.getItem("token");
        var Name = localStorage.getItem("firstName");

        if (tokenval) {
            setinout("Logout")
            setDirection("/")
            setname(Name);
        }
        else {
            setinout("Login");
            setDirection("/Login");
        }
    }, [])

    const Handlechange = () => {
        let tokenval = localStorage.getItem("token");
        if (tokenval) {
            localStorage.clear();
            window.location.reload();
        }
    }

    const {
        isEmpty,
        totalItems,
    } = useCart();




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

                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/plans">Plans</a></li>
                    <li><a href="/TrainersDetails">Trainer</a></li>

                    {
                        !localStorage.getItem('token') ?
                            <li><a className='login' href="/Login">Login</a></li>
                            :
                           <li>
                             <div className="dropdown">
                                <button className="dropbtn">{name} <HiOutlineChevronDown className="dropdown_icon" /></button>
                                <div className="dropdown-content" >
                                    <NavLink to="/Profile" className="dropdown_navlink">Profile</NavLink>
                                    <NavLink to={inoutDirection} className="dropdown_navlink" onClick={() => {
                                        Handlechange();
                                    }}>{inout}</NavLink>
                                </div>
                                {/* <NavLink to="/Cart" className="cart"><HiShoppingCart size={32} color="#F9FFEA" className="cartIcon" />{!isEmpty ? <span id="cart_num">{totalItems}</span> : <span></span>}</NavLink> */}
                            </div>
                           </li>
                    }
                    {
                        !localStorage.getItem('token') ?
                            <p></p>
                            :

                            <NavLink to="/Cart" className="cart"><HiShoppingCart size={32} color="#F9FFEA" className="cartIcon" />{!isEmpty ? <span id="cart_num">{totalItems}</span> : <span></span>}</NavLink>
                    }


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