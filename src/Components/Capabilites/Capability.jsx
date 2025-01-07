// import React from "react";
import CapabilityItem from "./CapabilityItem";


// import "./CapabilitySection.css"; // Import the CSS for the background and waves

const Capability = () => {

   
  return (
    <section className="py-12 pt-12 text-white container w-full h-full flex flex-col items-center justify-center bg-gray-400">
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="container mx-auto px-4 lg:px-20 flex flex-col items-center mb-12 justify-center ">
        {/* Main Heading */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl  text-black text-center  md:ml-0 font-bold uppercase mb-4">
          Our Core Capabilities
        </h1>

        {/* Subheading with lighter text */}
        <h2 className="block text-black text-xl lg:text-2xl font-light text-center mb-8">
          Driving your business forward through innovation and technology.
        </h2>

        <div className="grid w-full grid-cols-1 gap-6 text-left sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 overscroll-none ">
     
     
     <CapabilityItem
       
       src="/lottieFiles/AI.json"
       title="AI & Machine Learning Solutions"
       description="Enhance decision-making and streamline operations with advanced predictive analytics and automation. Our AI-driven solutions provide intelligent insights that empower businesses to operate more efficiently and stay competitive in an evolving market."
     />
    
       
          <CapabilityItem
            src="/lottieFiles/Cloud.json"
            title="Cloud Infrastructure & DevOps"
            description="Leverage the power of the cloud to scale your business seamlessly. We help you optimize cloud architecture, streamline DevOps processes, and deploy secure, reliable, and scalable infrastructure that meets your growing business needs."
          />
          <CapabilityItem
            src="/lottieFiles/webApp.json"
            title="Web & App Development"
            description="Build robust, responsive websites and mobile applications tailored to your specific business requirements. Our development solutions ensure seamless user experiences across all devices, helping you engage your audience effectively and grow your digital presence."
          />
          <CapabilityItem
            src="/lottieFiles/SoftwareSolutions.json"
            title="Enterprise Software Solutions"
            description="Drive operational efficiency with custom enterprise-grade software solutions designed to optimize your business processes. We deliver scalable software tailored to meet the unique demands of organizations, empowering them to achieve greater productivity."
          />
          <CapabilityItem
            src="/lottieFiles/consultation.json"
            title="Consultation Services"
            description="Accelerate your digital transformation journey with expert consultation. Our strategic guidance helps businesses define, plan, and implement successful software solutions that align with their vision, ensuring measurable impact and growth."
          />
          <CapabilityItem
            src="/lottieFiles/upgrade.json"
            title="Software Upgrades & Maintenance"
            description="Keep your systems performing at their best with regular software upgrades and ongoing maintenance. We provide proactive solutions to ensure your digital infrastructure is up to date, secure, and running efficiently, allowing you to focus on your core business operations."
          />
        </div>

    


    



   
      </div>
    </section>
  );
};

export default Capability;
