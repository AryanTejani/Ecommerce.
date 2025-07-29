import logos from "../utils/centraliseImages"
const Logos = () => {
  return (
    <section className="bg-black grid place-items-center">
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center gap-18 min-h-[122px] max-w-[1240px]">
      {logos.map((item,index )=> {
        return <img key={index} src={item} alt="" srcset="" className="w-32 h-10"/>
      })}
    
  </div>
  </section>
  )
}

export default Logos
