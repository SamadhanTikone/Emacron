import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export default function SectionA() {

    useGSAP(()=>{
        gsap.from(".box",{
            y:100,
            opacity:0,
            stagger:0.2,
            scrollTrigger :{
                trigger: ".box", // Element that triggers the animation
                start: "center 70%", // Start when the element is 80% in the viewport
                end: "bottom center", // End when the element is 30% in the viewport
                scrub: 3, // Scrub the animation with scroll
                // markers: true,
            }
            
        })
    })
  return (
   <>
   
   <div className="bg-gray-400 h-screen">

    <div>
        <h2 className=" box text-4xl font-bold underline uppercase text-center text-black py-12 mb-8">Our <span className=" text-[#363062]">Achievements</span></h2>

<div className="grid md:grid-cols-4 gap-12 w-full px-12 ">


<div className="flex justify-center items-center box bg-white  h-40 rounded-xl shadow-lg shadow-[#363062]">
    <img src="./project-manager.png" alt="" className="w-24 shadow-xl" />
    <p className="flex flex-col ml-2 text-lg text-black font-semibold"><span className="text-5xl font-bold text-[#363062]">90+</span>Happy Clients</p>
</div>
<div className="flex justify-center items-center box bg-white  h-40 rounded-xl shadow-lg shadow-[#363062]">
    <img src="./project.png" alt="" className="w-24 " />
    <p className="flex flex-col ml-2 text-lg  text-black font-semibold"><span className="text-5xl font-bold text-[#363062]">50+</span>Projects</p>
</div>
<div className="flex justify-center items-center box bg-white  h-40 rounded-xl shadow-lg shadow-[#363062]">
    <img src="./rating.png" alt="" className="w-24 drop-shadow-sm " />
    <p className="flex flex-col ml-2 text-lg text-black font-semibold"><span className="text-5xl font-bold text-[#363062]">22+</span>Rating</p>
</div>
<div className="flex justify-center items-center box bg-white  h-40 rounded-xl shadow-lg shadow-[#363062] ">
    <img src="./team.png" alt="" className="w-24 shadow-gray-800" />
    <p className="flex flex-col ml-2 text-lg text-black font-semibold"><span className="text-5xl font-bold text-[#363062]">10+</span>Team Members</p>
</div>


</div>

    </div>
      

<div>

<div>
<h2 className="box text-4xl font-bold underline uppercase text-center text-black py-12 mt-8">Our <span className=" text-[#363062]">Mission</span></h2>

    <p className="text-4xl box bg-white py-8 text-center font-bold text-black"><span className="font-bold quote text-6xl font-mono text-orange-500 ">&quot;</span>   Transforming Indian Dreams into Digital Reality: <span className="font-bold text-[#363062] ">Your Vision, Our Mission</span> <span className="font-bold text-6xl font-mono text-orange-500 ">&quot;</span> </p>
</div>


</div>

      </div>
   
   </>
  )
}
