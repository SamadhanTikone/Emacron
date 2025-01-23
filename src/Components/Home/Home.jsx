import styles from "./home.module.css"
import Button from '@mui/material/Button';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import SectionA from "./SectionA";
import ServiceCard from "../Services/ServiceCard"
import AboutCard from "../About/AboutCard"
import ContactUs from "../Contact/ContactUs";
export default function Home() {


  return (
  
  <>

    <div className={`${styles.bg} flex pl-4 md:pl-0 md:flex-row w-full flex-col h-full text-black`} >
    
    <div className="md:w-[80%] w-[80%] mt-[15%]">

      <h1 className={`md:text-6xl text-5xl  w-full md:mx-12 md:mt-1 my-16 ${styles.heading} text-right uppercase md:pl-4 font-bold`}> Turning Your <span className="text-blue-700">Vision</span> into <span className="text-blue-700">Reality</span>.</h1>

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

    {/* <Capability/> */}

    <div className="bg-white text-black">
 <h1 className={`text-2xl sm:text-3xl lg:text-4xl flex-col text-black text-center  md:ml-0 font-bold uppercase mb-4 ${styles.heading}`}>
          Our Core Capabilities
        </h1>

        {/* Subheading with lighter text */}
        <h2 className="block text-black text-xl lg:text-2xl font-light text-center pb-8">
          Driving your business forward through innovation and technology.
        </h2>
 </div>

  <div className="flex flex-wrap gap-8 justify-center md:px-28 px-4 py-12 text-black bg-white">


<ServiceCard src={'./ServiceCard/laptop-pad-ad-mobile.png'} title={"Web & Mobile Applications"} description={"Build robust, responsive websites and mobile applications tailored to your specific business requirements. Our development solutions ensure seamless user experiences across all devices, helping you engage your audience effectively and grow your digital presence. "}/>

<ServiceCard src={'./ServiceCard/artificial-intelligence.png'} title={"AI & Machine Learning Solutions"} description={"Enhance decision-making and streamline operations with advanced predictive analytics and automation. Our AI-driven solutions provide intelligent insights that empower businesses to operate more efficiently and stay competitive in an evolving market. "}/>

<ServiceCard src={'./ServiceCard/cloud-computing.png'} title={"Cloud Infrastructure & DevOps"} description={"Leverage the power of the cloud to scale your business seamlessly. We help you optimize cloud architecture, streamline DevOps processes, and deploy secure, reliable, and scalable infrastructure that meets your growing business needs."}/>

<ServiceCard src={'./ServiceCard/development.png'} title={"Enterprise Software Solutions"} description={"Drive operational efficiency with custom enterprise-grade software solutions designed to optimize your business processes. We deliver scalable software tailored to meet the unique demands of organizations, empowering them to achieve greater productivity."}/>

<ServiceCard src={'./ServiceCard/customer-service.png'} title={"Consultation Services"} description={"Accelerate your digital transformation journey with expert consultation. Our strategic guidance helps businesses define, plan, and implement successful software solutions that align with their vision, ensuring measurable impact and growth. "}/>

<ServiceCard src={'./ServiceCard/gear.png'} title={"Software Upgrades & Maintenance"} description={"Keep your systems performing at their best with regular software upgrades and ongoing maintenance. We provide proactive solutions to ensure your digital infrastructure is up to date, secure, and running efficiently, allowing you to focus on your core business operations."}/>


</div>

    {/* <OperatingModelSection/> */}
<div className="bg-white text-black ">
  
<h2 className={`text-2xl sm:text-3xl lg:text-4xl flex-col text-black text-center  md:ml-0 font-bold uppercase mb-4 ${styles.heading}`}>
          Our Digital Operating Model
        </h2>
<div className="flex justify-center items-center">
<p className="block text-black text-xl lg:text-2xl font-light text-center w-[60%] pb-8 ">A Digital Operating Model integrates technology, processes, and people to drive innovation, efficiency, and customer value.</p>

</div>


  </div>    
  
  <div className="pt-8 px-28 flex justify-center items-center py-12 flex-wrap gap-9 bg-white text-black">
    
    
    <AboutCard title={"Quality Deliverables"} src={"./AboutIcon/rosette-discount-check.png"} description={"We ensure top-tier deliverables that meet your business needs."}/>
    
    <AboutCard title={"Agile Process"} src={"./AboutIcon/automation.svg"} description={"We follow agile methodologies for fast and effective outcomes."}/>
    
    <AboutCard title={"Timely Releases"} src={"./AboutIcon/clock-hour-11.svg"} description={"We guarantee timely product releases to meet your market demands."}/>
    
    <AboutCard title={"Tech Support"} src={"./AboutIcon/brand-wechat.svg"} description={"Q24/7 support to ensure smooth operation of your systems."}/>
    
    <AboutCard title={"Technology Partners"} src={"./AboutIcon/device-laptop.svg"} description={"We become your trusted partner for all technological innovations."}/>
    
    <AboutCard title={"Cost Savings"} src={"./AboutIcon/coin-rupee.svg"} description={"We ensure cost savings for your business operations."}/>
    
    
    </div>

 <div className="bg-white">
 <div className="bg-white text-black ">
  
  <h2 className={`text-2xl sm:text-3xl lg:text-4xl flex-col text-black text-center  md:ml-0 font-bold uppercase mb-4 ${styles.heading}`}>
        Send Message to us
          </h2>
  <div className="flex justify-center items-center">
  <p className="block text-black text-xl lg:text-2xl font-light text-center w-[60%] pb-8 ">Contact us today to begin your journey!.</p>
  
  </div>
 <ContactUs/>
 </div>
 </div>
    
     
  </>
  )
}
