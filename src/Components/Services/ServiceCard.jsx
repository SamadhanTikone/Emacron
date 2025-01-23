import styles from "./Service.module.css"

// eslint-disable-next-line react/prop-types
export default function ServiceCard({src, title , description}) {
  return (
    <div>
      
      <div className=" flex flex-col md:w-[400px] w-[350px] gap-4 bg-gray-300 p-8 rounded-lg justify-center items-center">
      <img src={src} alt="" className="w-24"/>
      <h2 className={`text-2xl font font-semibold ${styles.title}`}>{title}</h2>
      <p className={`${styles.des}`}>{description}</p>
      </div>


    </div>
  )
}
