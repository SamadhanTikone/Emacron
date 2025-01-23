import styles from "./About.module.css"
import ContactUs from "../Contact/ContactUs"

// import SectionA from "../Home/SectionA"

export default function About() {
  return (
    <div className={`${styles.bg}`}>
     


    <div className="bg-[url(public/hero-bg.png)] h-full md:pt-48 pt-28">
    <p className="text-blue-500 lowercase  w-[50%] text-xl text-center m-auto md:mb-4">We are</p>
      <h1 className={`md:text-6xl text-5xl text-black font-semibold md:w-[50%] px-4 text-center m-auto ${styles.heading}`}>Focused on performance, digital solutions, and quality engineering.</h1>

      <p className={`text-black md:w-[50%] ${styles.pTag} md:px-2 px-4 text-xl text-center m-auto mt-4`}>Experience the transformative power of innovation and seamless solutions with dynamics. Our journey does not end with the delivery of a solution.</p>


      <div>

<div className={` flex px-24 md:mx-24 mx-4 md:gap-10 gap-4 justify-center flex-wrap mt-12 ${styles.p} items-center`}>

<p className="flex flex-col md:ml-2 text-lg p-8 text-black font-semibold"><span className="md:text-4xl text-3xl font-bold text-blue-500">90+</span>Our Happy Clients </p>
<p className="flex flex-col md:ml-2 text-lg p-8 text-black font-semibold"><span className="md:text-4xl text-3xl font-bold text-blue-500">50+</span>Total Projects Done</p>

<p className="flex flex-col md:ml-2 text-lg p-8 text-black font-semibold"><span className="md:text-4xl text-3xl font-bold text-blue-500">100%</span>Client Satisfaction</p>

<p className="flex flex-col md:ml-2 text-lg p-8 text-black font-semibold"><span className="md:text-4xl text-3xl font-bold text-blue-500">10+</span>Team Members</p>




</div>

    </div>
    </div>

<div className={`${styles.sectionA} bg-white text-black md:px-60 px-12`}>
<p className={`text-blue-500 ${styles.ourCompany}`} >OUR COMPANY </p>

<h2 className={`${styles.heading} md:text-5xl text-4xl`}>Why our company ?</h2>

<div className="mt-8 flex flex-wrap gap-9">


<div className="bg-gray-300 w-80 flex flex-col rounded-lg  justify-center items-center gap-4 py-12 px-4">
  <img src="./AboutIcon/rosette-discount-check.png" alt="Quality Deliverables" className="w-12"/>
  <h3 className="text-2xl font-semibold ">Quality Deliverables</h3>
  <p className="px-4 text-center">We ensure top-tier deliverables that meet your business needs.</p>
</div>

<div className="bg-gray-300 w-80 flex flex-col rounded-lg  justify-center items-center gap-4 py-12 px-4">
  <img src="./AboutIcon/automation.svg" alt="Quality Deliverables" className="w-12"/>
  <h3 className="text-2xl font-semibold ">Agile Process</h3>
  <p className="px-4 text-center">We follow agile methodologies for fast and effective outcomes.</p>
</div>

<div className="bg-gray-300 w-80 flex flex-col rounded-lg  justify-center items-center gap-4 py-12 px-4">
  <img src="./AboutIcon/clock-hour-11.svg" alt="Quality Deliverables" className="w-12"/>
  <h3 className="text-2xl font-semibold ">Timely Releases</h3>
  <p className="px-4 text-center">We guarantee timely product releases to meet your market demands.</p>
</div>

<div className="bg-gray-300 w-80 flex flex-col rounded-lg  justify-center items-center gap-4 py-12 px-4">
  <img src="./AboutIcon/brand-wechat.svg" alt="Quality Deliverables" className="w-12"/>
  <h3 className="text-2xl font-semibold ">Tech Support</h3>
  <p className="px-4 text-center">Q24/7 support to ensure smooth operation of your systems.</p>
</div>

<div className="bg-gray-300 w-80 flex flex-col rounded-lg  justify-center items-center gap-4 py-12 px-4">
  <img src="./AboutIcon/device-laptop.svg" alt="Quality Deliverables" className="w-12"/>
  <h3 className="text-2xl font-semibold ">Technology Partner</h3>
  <p className="px-4 text-center">We become your trusted partner for all technological innovations.</p>
</div>

<div className="bg-gray-300 w-80 flex flex-col rounded-lg  justify-center items-center gap-4 py-12 px-4">
  <img src="./AboutIcon/coin-rupee.svg" alt="Quality Deliverables" className="w-12"/>
  <h3 className="text-2xl font-semibold ">Cost Savings</h3>
  <p className="px-4 text-center">We ensure cost savings for your business operations.</p>
</div>

</div>

</div>

<div className={` ${styles.sectionB} bg-white text-black  pt-12`}>


  <h3 className="md:text-5xl text-4xl font-semibold md:px-60 mb-4 px-4">Why  E<span className="text-blue-500">M</span>ACRON?</h3>

<div className="flex md:flex-row flex-col justify-between md:px-60 items-center py-12 bg-gray-300">

  <img src="./AboutIcon/Questions-pana (1).svg" alt="" className="md:w-96 w-60"/>

  <p className="text-[18px] leading-[40px] md:w-[50%] px-8">At Emacron, we deliver top-quality web apps, mobile apps, and software tailored to your needs. With a focus on innovation, reliability, and customer satisfaction, our skilled team ensures every project exceeds expectations. Partner with us for impactful solutions that drive success.</p>

</div>

<div className={` ${styles.sectionC} m-auto md:px-60 bg-white text-black px-8 pt-12`}>

<p className={`text-blue-500 ${styles.ourCompany}`} >contact </p>
<h3 className="md:text-5xl text-4xl font-semibold">Connect with us</h3>
  <p className="text-xl font-semibold mt-2">Contact us today to begin your journey!</p>

<ContactUs/>

</div>

</div>
   
    </div>
  )
}
