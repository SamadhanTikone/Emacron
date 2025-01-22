import styles from "./Client.module.css"

// eslint-disable-next-line react/prop-types
export default function FeedBack({ src, name, description }) {
    return (
        <div className="">

            <div className="bg-blue-300 w-[400px] flex-col h-auto flex py-8 gap-2  items-center rounded-xl">
                <img src={src} alt="" className="rounded-[50%] w-24" />

                <h4 className="text-xl underline">{name}</h4>
                <p className={`px-4 text-center text-[18px] ${styles.pTag} `}> <span className="text-2xl font-serif">&quot;</span> {description} <span className="text-2xl font-serif">&quot;</span></p>


            </div>

        </div>
    )
}
