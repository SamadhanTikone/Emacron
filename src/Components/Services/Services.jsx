import { useNavigate } from "react-router-dom"
import AutoPlayService from "./AutoPlayService"
import styles from "./Service.module.css"
import ServiceCard from "./ServiceCard"

export default function Services() {

  const navigate = useNavigate();

  function handleAppointment(){
    navigate("/contact")
  }

  return (
    <>
    
    <div className={`${styles.bg} h-full md:pt-48 pt-28 text-black ${styles.main}`}>
      
      <p className="text-blue-500 lowercase w-[50%] text-xl text-center m-auto mb-4">our services</p>
        <h1 className="md:text-6xl text-4xl text-black font-semibold md:w-[50%] text-center m-auto">Solutions for Your  <span className="text-blue-500">Needs</span>.</h1>
        <p className={`text-black md:w-[50%] px-8 ${styles.pTag} text-xl text-center m-auto mt-4`}>Providing innovative, tailored solutions to meet your unique needs with precision, expertise, and a commitment to excellence.</p>
  
        <div>
      
  

      </div>
  
      <div className="md:px-48 px-12 mt-12 md:mb-2 mb-8">
        <p className={`text-blue-500 text-xl ${styles.ourCompany}`} >our Services </p>
        <h2 className={`${styles.heading} md:text-5xl text-4xl font-semibold w-full`}>What we Provides?</h2>
        <p className="text-[18px] md:pr-12 mt-2">We provide cutting-edge, customized solutions, expert services, and innovative strategies designed to drive growth, efficiency, and success.</p>

  </div>
  <div className="flex flex-wrap gap-8 justify-center md:px-28 px-4 py-12">

<ServiceCard src={'./ServiceCard/laptop-pad-ad-mobile.png'} title={"Web & Mobile Applications"} description={"Build robust, responsive websites and mobile applications tailored to your specific business requirements. Our development solutions ensure seamless user experiences across all devices, helping you engage your audience effectively and grow your digital presence. "}/>

<ServiceCard src={'./ServiceCard/artificial-intelligence.png'} title={"AI & Machine Learning Solutions"} description={"Enhance decision-making and streamline operations with advanced predictive analytics and automation. Our AI-driven solutions provide intelligent insights that empower businesses to operate more efficiently and stay competitive in an evolving market. "}/>

<ServiceCard src={'./ServiceCard/cloud-computing.png'} title={"Cloud Infrastructure & DevOps"} description={"Leverage the power of the cloud to scale your business seamlessly. We help you optimize cloud architecture, streamline DevOps processes, and deploy secure, reliable, and scalable infrastructure that meets your growing business needs."}/>

<ServiceCard src={'./ServiceCard/development.png'} title={"Enterprise Software Solutions"} description={"Drive operational efficiency with custom enterprise-grade software solutions designed to optimize your business processes. We deliver scalable software tailored to meet the unique demands of organizations, empowering them to achieve greater productivity."}/>

<ServiceCard src={'./ServiceCard/customer-service.png'} title={"Consultation Services"} description={"Accelerate your digital transformation journey with expert consultation. Our strategic guidance helps businesses define, plan, and implement successful software solutions that align with their vision, ensuring measurable impact and growth. "}/>

<ServiceCard src={'./ServiceCard/gear.png'} title={"Software Upgrades & Maintenance"} description={"Keep your systems performing at their best with regular software upgrades and ongoing maintenance. We provide proactive solutions to ensure your digital infrastructure is up to date, secure, and running efficiently, allowing you to focus on your core business operations."}/>

</div>

<div className="lg:px-48 px-4 py-12">

<p className={`text-blue-500 text-xl ${styles.ourCompany}`} >our Features </p>
        <h2 className={`${styles.heading} md:text-5xl text-4xl font-semibold w-full`}>Our Features</h2>
        <p className="text-[18px] md:pr-12 mt-2">Our features include AI-driven personalization, 24/7 support, mobile-friendly design, gamification, flexible plans, real-time analytics, enhanced security, community collaboration, and rewards programs to drive growth and engagement.</p>

        <div className="mt-8">
<AutoPlayService/>
        </div>
</div>

<div className="flex  justify-center items-center py-12">
  <div>
  <button className={` text-lg ${styles.des} bg-blue-500 py-2 px-4 text-white rounded-lg hover:bg-blue-400 `} onClick={handleAppointment}>Make an Appointment!</button>
  </div>
</div>
  
      </div>
    
    </>
  )
}
