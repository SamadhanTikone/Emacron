import styles from "./Service.module.css"
import ServiceCard from "./ServiceCard"

export default function Services() {
  return (
    <>
    
    <div className={`${styles.bg} h-full md:pt-48 pt-28 text-black ${styles.main}`}>
      
      <p className="text-blue-500 lowercase w-[50%] text-xl text-center m-auto mb-4">our services</p>
        <h1 className="text-6xl text-black font-semibold md:w-[50%] text-center m-auto">Solutions for Your  <span className="text-blue-500">Needs</span>.</h1>
        <p className={`text-black md:w-[50%] px-8 ${styles.pTag} text-xl text-center m-auto mt-4`}>Providing innovative, tailored solutions to meet your unique needs with precision, expertise, and a commitment to excellence.</p>
  
        <div>
      
  
  {/* <p className="my-12"><Slider/></p> */}
  
      </div>
  
      <div className="md:px-48 px-12 mt-12 md:mb-2 mb-8">
        <p className={`text-blue-500 text-xl ${styles.ourCompany}`} >our services </p>
        <h2 className={`${styles.heading} md:text-6xl text-4xl font-semibold w-full`}>What we Provides?</h2>
        <p className="text-[18px] md:pr-12 mt-2">We provide cutting-edge, customized solutions, expert services, and innovative strategies designed to drive growth, efficiency, and success.</p>

  </div>
  <div className="flex flex-wrap gap-8 md:px-28 px-4">

<ServiceCard src={'./ServiceCard/app-design.png'} title={"Web & Mobile Applications"} description={"Build robust, responsive websites and mobile applications tailored to your specific business requirements. Our development solutions ensure seamless user experiences across all devices, helping you engage your audience effectively and grow your digital presence. "}/>
<ServiceCard src={'./ServiceCard/artificial-intelligence.png'} title={"Web & Mobile Applications"} description={"Build robust, responsive websites and mobile applications tailored to your specific business requirements. Our development solutions ensure seamless user experiences across all devices, helping you engage your audience effectively and grow your digital presence. "}/>
<ServiceCard src={'./ServiceCard/cloud-computing.png'} title={"Web & Mobile Applications"} description={"Build robust, responsive websites and mobile applications tailored to your specific business requirements. Our development solutions ensure seamless user experiences across all devices, helping you engage your audience effectively and grow your digital presence. "}/>
<ServiceCard src={'./ServiceCard/development.png'} title={"Web & Mobile Applications"} description={"Build robust, responsive websites and mobile applications tailored to your specific business requirements. Our development solutions ensure seamless user experiences across all devices, helping you engage your audience effectively and grow your digital presence. "}/>
<ServiceCard src={'./ServiceCard/customer-service.png'} title={"Web & Mobile Applications"} description={"Build robust, responsive websites and mobile applications tailored to your specific business requirements. Our development solutions ensure seamless user experiences across all devices, helping you engage your audience effectively and grow your digital presence. "}/>
<ServiceCard src={'./ServiceCard/gear.png'} title={"Web & Mobile Applications"} description={"Build robust, responsive websites and mobile applications tailored to your specific business requirements. Our development solutions ensure seamless user experiences across all devices, helping you engage your audience effectively and grow your digital presence. "}/>

</div>
  
      </div>
    
    </>
  )
}
