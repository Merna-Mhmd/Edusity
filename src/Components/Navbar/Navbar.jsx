import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll';
import menu from '../../assets/menu-icon.png'
const Navbar = () => {
    const[sticky,setsticky]=useState(false);
    useEffect(()=>{
window.addEventListener('scroll',()=>{
    
    window.scrollY >50 ? setsticky(true):setsticky(false);

})


     },[])
     const [mobileMenu,setmobilemenu]=useState(false);
     const togglemenu=()=>{
mobileMenu?setmobilemenu(false):setmobilemenu(true);
     }
  return (
    <nav className={`container ${sticky?'dark-nav':''}`} >
<img src={logo} alt="" className='logo'/>
<ul className={mobileMenu?'':'hide-mo'}>
    <li >
    <Link to='hero' smooth={true} offset={0}
        duration={500}>  Home</Link>
      
    </li>
    <li>
    <Link to='program' smooth={true} offset={-260}
        duration={500}>
        Program
        </Link>
    </li>
    <li>
    <Link to='about' smooth={true} offset={-150}
    duration={500}>
        About us
        </Link>
    </li>
    <li>
    <Link to='campus' smooth={true} offset={-260}
    duration={500}>

Campus
    </Link>

      

    </li>
    <li>    <Link to='testimonials' smooth={true} offset={-260}
    duration={500}>
        Testimonials

    </Link>

    </li>

    <li>
    <Link to='Contact' smooth={true} offset={-260}
    duration={500}>
        <button className='btn'>
        Contact us
        </button>
     </Link>
    </li>
</ul>
<img src={menu} alt="" className='menui' onClick={togglemenu} />

    </nav>
  )
}

export default Navbar