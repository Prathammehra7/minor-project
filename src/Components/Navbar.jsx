import { useState , useEffect } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom'
import { MdOutlineClose } from 'react-icons/md'
import Logo from '../Image/logo.png'
import { GoThreeBars } from 'react-icons/go'
import './Navbar.css'

const Navbar = () => {
    const [query] = useState("");
    const [setData] = useState([]);
    const [inout, setinout] = useState()
    const [inoutDirection, setDirection] = useState("/Login");

    useEffect(() => {
        let tokenval = localStorage.getItem("token");

        if (tokenval) {
            setinout("Logout")
            setDirection("/")
        }
        else {
            setinout("Login");
            setDirection("/Login");
        }
    }, [])

    const Handlechange = () => {
        let tokenval = localStorage.getItem("token");
        if (tokenval) {
            localStorage.removeItem("token");
        }
    }
    useEffect(() => {
        const fetchData = async () => {
          const res = await axios.get(`http://localhost:5000?q=${query}`);
          setData(res.data);
        };
        if (query.length === 0 || query.length > 2) fetchData();
      }, [query]);


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
                        <li  className='login'><a href={inoutDirection} target={"_main"} onClick={() => {
                                Handlechange();
                            }} >{inout}</a></li>
                   
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