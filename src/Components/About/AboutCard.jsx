

// eslint-disable-next-line react/prop-types
export default function AboutCard({title, src , description}) {
  return (
    <div>
      <div className="bg-gray-300 w-80 flex flex-col rounded-lg  justify-center items-center gap-4 py-12 px-4">
  <img src={src} alt="Quality Deliverables" className="w-12"/>
  <h3 className="text-2xl font-semibold ">{title}</h3>
  <p className="px-4 text-center">{description}</p>
</div>
    </div>
  )
}
