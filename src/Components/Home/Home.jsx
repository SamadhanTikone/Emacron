import styles from "./home.module.css"
import Button from '@mui/material/Button';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import SectionA from "./SectionA";

export default function Home() {


  return (
  
  <>

    <div className="bg-[url(./hero-bg.png)] flex h-screen text-black">
    
    <div className="w-[50%] mt-[15%]">

      <h1 className={`text-[70px] ${styles.heading}  text-right uppercase pl-4 font-bold`}> Turning Your <span className="text-[#363062]">Vision</span> into <span className="text-[#363062]">Reality</span>.</h1>

      <p className="text-left mt-6 text-[18px] px-16">We specialize in turning your ideas into successful, real-world solutions. Our team collaborates closely with you to understand your vision and bring it to life with cutting-edge technology and expertise. Share your project idea with us, and let’s make it a reality together!</p>

    
   <p className="ml-16 mt-4">
   <Button variant="contained" sx={{bgcolor:"#363062"}}>Make it Real <KeyboardDoubleArrowRightIcon/> </Button>
   </p>
    </div>

    <div>


        <img 
              className={`h-full mt-14 ${styles.mainImage}`}
              src="public/Website Creator-rafiki.svg" 
              alt="Website Creator-rafiki" />

    </div>
     </div>
    
    <SectionA/>
     
  </>
  )
}
