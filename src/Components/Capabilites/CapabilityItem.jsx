
import Lottie from "react-lottie-player";
import styles from "./Capability.module.css"



// eslint-disable-next-line react/prop-types
const CapabilityItem = ({src, title, description}) => {

   
    
    return (
        <div className={`text-center p-8 item bg-white ${styles.box} text-black shadow-4xl rounded-xl`}>
            {/* Lottie Animation */}
            <Lottie  
                loop
                play
                animationData={null} 
                path={src} 
                style={{ width: 120, filter: "drop-shadow(10px 5px 10px rgba(10, 30, 50, 0.9))",display: "block",margin: "auto" }}
            />

<h2 className="text-xl font-bold my-2">{title}</h2>
<p className="text-md  text-center mx-2">{description}</p>
         
           
        </div>
    );
};

export default CapabilityItem;
