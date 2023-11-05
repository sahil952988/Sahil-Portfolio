import About from "./About";
import Contact from "./Contact";
import NavPage from "./NavPage";
import Portfolio from "./Portfolio";
import Services from "./Services";


const HomePage = () => {
  return (
    <div>

      <div className="flex ">
        <p className=" lg:hidden  mt-5"><i class="fa-brands fa-staylinked"></i></p>
        <menu className="lg:hidden  mt-8">
          <div className="w-[35px] h-[5px] bg-black"></div>
          <div className="w-[35px] h-[5px] bg-black my-1"></div>
          <div className="w-[35px] h-[5px] bg-black"></div>
        </menu>
      </div>

      <div className="lg:bg-blue-300 max-w-[1550px] lg:h-[800px] bg-blue-300 h-[700px] ">
        <div>
          <NavPage />
        </div>

        <div className="flex justify-center mt-10"><img className=" w-64 rounded-full" src="666.jpg" alt="" /></div>

        <div className="flex justify-center mt-4  ">
          <p className="text-[45px]">Sahil Ali</p>
        </div>
        <div className="flex justify-center">
          <p className="text-[20px]">I'm a Web Developer</p>
        </div>

      </div>

      <About />
      <Services />
      <Portfolio />
      <Contact />



    </div >
  )
}
export default HomePage