
import { Link } from "react-router-dom";
import styles from "./Contact.module.css"
import Button from '@mui/material/Button';
import ContactUs from "./ContactUs"

export default function Contact() {
  return (
    <>
    <div className={`  ${styles.main} h-full text-black pt-[15%] `}>
      

<div >


<div className="flex flex-col justify-center items-center px-4 md:-mt-[5%] mt-24 gap-8">

<h1 className={` text-black md:text-6xl text-5xl  ${styles.heading} `}>We are <span className="text-[#363062]"> always </span> open to talk</h1>
<p className='md:text-lg text-md text-center md:px-1 px-4'>We are here to connect and collaborate anytime you need.</p>


<Button variant="outlined" sx={{borderColor:"#363062", color:"#363062", margin:"10px 2px"}} > <a href="#contact"> contact </a> </Button>


</div>



<div className="flex flex-col md:flex-row mb-24 justify-around md:gap-1 gap-4 items-center">

<div className={`${styles.card} flex flex-col rounded-lg bg-gray-200`}>

<img src="./icons/support.png" alt="" className="bg-gray-300 p-4  rounded-[50%] md:w-24 w-16 "/>

<p className="text-lg font-semibold text-black">Support</p>
<p className="mt-2">Contact our fast support team</p>

<Link to={"mailto:info@emacronsolutions.com"} className="mt-4 text-blue-500 underline"> info@emacronsolutions.com</Link>


</div>

<div className={`${styles.card} flex flex-col rounded-lg bg-gray-200`}>

<div className="relative flex justify-center items-center">
<img src="./icons/telephone (1).png" alt="" className=" md:w-12 w-6  absolute" />
<div className="bg-gray-300  rounded-[50%]   w-24 h-24"></div></div> 
<p className="text-lg font-semibold text-black">Contact</p>
<p className=" my-4">Mon-Fri from 9am to 9pm</p>
<a href="tel:+917843030189">
Phone : <span className="mt-4 text-blue-500 underline">+91 78430 30189</span> </a>

</div>

</div>



</div>

<ContactUs/>
    </div>
    </>
  )
}
