const Portfolio = () => {
  return (
    <div>
      <div className=" ml-5 lg:ml-[250px]  mt-10">
        <p className="text-red-500 text-[17px]"> PORTFOLIO</p>
        <p className="text-[30px] font-bold">Featured Works</p>
      </div>


      <div className="flex space-x-5 ml-5 lg:ml-[250px]  mt-10">
        <p className="hover:text-red-500 text-[16px]">All</p>
        <p className="hover:text-red-500 text-[16px]">Websites</p>
        <p className="hover:text-red-500 text-[16px]">Photography</p>
      </div>

      <div>
        <a className="bg-[#e65f78] text-white h-10 w-10 ml-[250px]" href="https://calculator-five-ivory.vercel.app/">Calculator Website</a>
        <br />
        <a className="bg-[#e65f78] text-white h-10 w-10 ml-[250px] mt-10" href="https://movie-project-omfl2via7-mandip765.vercel.app/">Movie Website</a>
      </div>






    </div>
  )
}
export default Portfolio