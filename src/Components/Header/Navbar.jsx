import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react";
import Menu from "./Menu"

import Button from '@mui/material/Button';
export default function Navbar() {

  const [navBg, setNavBg] = useState(false);
  const navigate = useNavigate();

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setNavBg(true); 
    } else {
      setNavBg(false); 
    }
  };


  function handleClick(){
    navigate("/contact");
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
<div className='relative '>

<div 
      className={`flex fixed px-32 w-full justify-around z-10 text-black ${navBg ? "bg-white" : "bg-transparent" } p-6 items-center`}>
 
    <div>

          <Link to={"/"}> <h1 className='uppercase text-3xl font-bold'>E<span className='text-blue-700'>M</span>ACRON</h1> </Link> 

    </div>

<p className='md:hidden block' > <Menu/> </p>

    <div className=' justify-evenly w-[50%] font-semibold uppercase md:flex hidden'>
      <NavLink to={"/"}   className={({ isActive }) =>
          isActive ? " text-blue-700" : "text-black"
        }>Home</NavLink>
        <NavLink to={"/services"}   className={({ isActive }) =>
          isActive ? "text-[#5D12D2]" : "text-black"
        }>Services</NavLink>
         <NavLink to={"/clients"}   className={({ isActive }) =>
          isActive ? "text-[#5D12D2]" : "text-black"
        }>Clients</NavLink>
      <NavLink to={"/about"}   className={  ( { isActive }) =>
          isActive ? "text-[#5D12D2]" : "text-black"
        }>About</NavLink>
      
      
      {/* <NavLink to={"/purpose"}   className={({ isActive }) =>
          isActive ? "text-[#ff921d]" : "text-black"
        }>Purpose</NavLink> */}
     
    </div>

    <div className='md:block hidden'>
    <Button variant="contained" sx={{bgcolor:"#363062"}} onClick={handleClick}>Contact us</Button>
    </div>

</div>

</div>
  )
}
