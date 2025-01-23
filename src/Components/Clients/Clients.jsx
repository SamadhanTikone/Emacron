import styles from "./Client.module.css"
import Slider from "./AutoPlay"
import AutoPlayFeed from "./AutoPlayFeed"
import ContactUs from "../Contact/ContactUs"


export default function Projects() {
  return (

    <>
    
    
    <div className={`${styles.bg} h-full md:pt-48 pt-28 text-black ${styles.main}`}>
      
    <p className="text-blue-500 lowercase w-[50%] text-xl text-center m-auto mb-4">our clients</p>
      <h1 className="md:text-6xl text-4xl text-black font-semibold md:w-[50%] px-8 text-center m-auto">Transforming visions into reality with innovation, and <span className="text-blue-500">excellence</span>.</h1>
      <p className={`text-black md:w-[50%] px-4 ${styles.pTag} text-xl text-center m-auto mt-4`}>We transform ambitious ideas into impactful solutions with innovation, expertise, and excellence, delivering results that exceed expectations and inspire trust.</p>

      <div>
      <h2 className="text-center py-4 text-xl mt-8 uppercase font-semibold">Our partners</h2>

<p className="my-12"><Slider/></p>

    </div>

    <div className="md:px-48 px-4">
      <p className={`text-blue-500 ${styles.ourCompany}`} >our work </p>
      <h2 className={`${styles.heading} md:text-6xl text-4xl font-semibold `}>What we have Done?</h2>
      <p className="text-[18px] pr-12 mt-2">We have developed a wide range of Projects focusing on delivering scalable, efficient, and secure solutions for diverse business needs and user requirements.</p>

<div className="flex flex-col justify-center  items-center py-8">

<div className="py-8 flex gap-4 lg:flex-row flex-col md:px-24 sm:px-0 lg:px-1">
  <div className="w-[380px] h-[350px] my-4 flex justify-center items-center bg-gray-400 rounded-lg">
  
    <p className=" text-2xl uppercase font-semibold">project-01</p>
  </div>
  <div className="w-[380px] h-[350px] my-4 flex justify-center items-center bg-gray-400 rounded-lg">
  
    <p className=" text-2xl uppercase font-semibold">project-02</p>
  </div>
  <div className="w-[380px] h-[350px] my-4 flex justify-center items-center bg-gray-400 rounded-lg">
  
    <p className=" text-2xl uppercase font-semibold">project-03</p>
  </div>

  
    </div>
    <button className="border border-blue-500 px-5 rounded-xl hover:bg-blue-500 transition-colors duration-200 py-3">See More</button>

</div>


</div>

    </div>

   

   <div className="bg-white text-black lg:px-48 px-4 pt-8">
   <p className={`text-blue-500 ${styles.ourCompany}`} >Feedback </p>
<h3 className="md:text-6xl text-4xl font-semibold">What clients says about us?</h3>

<div className=" p-8 ">
<AutoPlayFeed/>
</div>

<div className="mt-12">
<p className={`text-blue-500 ${styles.ourCompany}`} >contact </p>
<h3 className="md:text-6xl text-4xl font-semibold">Connect with us</h3>
  <p className="text-xl font-semibold mt-2">Contact us today to begin your journey!</p>
<ContactUs/>
</div>
   </div>
  
    
    </>
  )
}
