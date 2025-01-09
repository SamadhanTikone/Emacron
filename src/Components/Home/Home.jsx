import styles from "./home.module.css"
import Button from '@mui/material/Button';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import SectionA from "./SectionA";
import Capability from "../Capabilites/Capability";
import OperatingModelSection from "../Capabilites/OperatingModelSection";
import ContactUs from "../Contact/ContactUs";
export default function Home() {


  return (
  
  <>

    <div className={`${styles.bg} flex pl-4 md:pl-0 md:flex-row flex-col h-full text-black`} >
    
    <div className="md:w-[80%] w-[80%] mt-[15%]">

      <h1 className={`md:text-6xl text-5xl  w-full md:mx-12 md:mt-1 my-16 ${styles.heading} text-right uppercase md:pl-4 font-bold`}> Turning Your <span className="text-[#363062]">Vision</span> into <span className="text-[#363062]">Reality</span>.</h1>

      <p className="text-left mt-6 text-[18px] px-4 md:px-16">We specialize in turning your ideas into successful, real-world solutions. Our team collaborates closely with you to understand your vision and bring it to life with cutting-edge technology and expertise. Share your project idea with us, and let’s make it a reality together!</p>

    
   <p className="md:ml-16 ml-4 mt-4">
   <Button variant="contained" sx={{bgcolor:"#363062"}}>Make it Real <KeyboardDoubleArrowRightIcon/> </Button>
   </p>
    </div>

    <div className="w-full md:mt-14 flex justify-center items-center md:mb-0 ">


        <img 
              className={`h-full md:full w-[400px] md:w-full ${styles.mainImage}`}
              src="./Website Creator-rafiki.svg" 
              alt="Website Creator-rafiki" />

    </div>
     </div>
    
    <SectionA/>

    <Capability/>

    <OperatingModelSection/>

    <ContactUs/>
    
     
  </>
  )
}
