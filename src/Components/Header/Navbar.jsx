import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react";

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
      className={`flex fixed w-full justify-around z-10 text-black ${navBg ? "bg-white" : "bg-transparent" } p-6 items-center`}>
 
    <div>

        <h1 className='text-3xl font-bold  uppercase '>  <Link to={"/"}>Emacron</Link> </h1>

    </div>

    <div className='flex justify-evenly w-[50%] font-semibold uppercase'>
      <NavLink to={"/"}   className={({ isActive }) =>
          isActive ? " text-[#ff921d]" : "text-black"
        }>Home</NavLink>
        <NavLink to={"/services"}   className={({ isActive }) =>
          isActive ? "text-[#ff921d]" : "text-black"
        }>Services</NavLink>
         <NavLink to={"/clients"}   className={({ isActive }) =>
          isActive ? "text-[#ff921d]" : "text-black"
        }>Clients</NavLink>
      <NavLink to={"/about"}   className={  ( { isActive }) =>
          isActive ? "text-[#ff921d]" : "text-black"
        }>About</NavLink>
      <NavLink to={"/contact"}   className={({ isActive }) =>
          isActive ? "text-[#ff921d]" : "text-black"
        }>Contact</NavLink>
      
      {/* <NavLink to={"/purpose"}   className={({ isActive }) =>
          isActive ? "text-[#ff921d]" : "text-black"
        }>Purpose</NavLink> */}
     
    </div>

    <div>
    <Button variant="contained" sx={{bgcolor:"#363062"}} onClick={handleClick}>Contact us</Button>
    </div>

</div>

</div>
  )
}
