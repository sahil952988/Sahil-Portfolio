const About = () => {
  return (
    <div>
      <img className="  ml-[25px] absolute mt-[140px] lg:ml-[310px]  w-[300px] h-[400px]" src="portfolio.jpg" alt="about" />

      <div className=" ml-5 lg:ml-[250px]  mt-10">
        <p className="text-red-500 text-[16px]">BIOGRAPHY</p>
        <p className="text-[30px] font-bold">About Me</p>
      </div>

      <div className="lg:flex">
        <p className="border-[10px] border-[#cc7722] max-h-[400px] max-w-[290px] 
         lg:border-[10px] border-[#cc7722] h-[400px] w-[640px] lg:ml-[280px] mt-24">
        </p>
        <div className="lg:pl-[100px] pl-3 pt-[55px]">
          <p className="text-[20px] font-serif">I'm Sahil Ali and Web Developer</p>
          <p className="pt-[45px] text-justify lg:pr-[350px] pr-5 text-[16px]">Hi! My name is Sahil Ali. I am a Web Developer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success.</p>

          <div className="flex pt-10 pr-3">
            <div>
              <p><i class="fa-solid fa-gift"></i>  Birthday : 2003/01/01</p>
              <p className="py-2"><i class="fa-solid fa-envelope"></i> Mail: sahilacc000@gmail.com</p>
              <p><i class="fa-solid fa-book"></i>  Study: Mind Risers</p>
              <p className="py-2"><i class="fa-solid fa-location-dot"></i> Current Location:Kathmandu,Nepal</p>
              <p><i class="fa-solid fa-location-dot"></i>  Permanent Location:Bihar,India</p>
            </div>


            <div className="pl-6">
              <p><i class="fa-solid fa-calendar-days"></i>  Age: 20</p>
              <p className="py-2"><i class="fa-solid fa-gamepad"></i>  interests: Playstation, Reading</p>
              <p><i class="fa-solid fa-graduation-cap"></i>  Degree: Web Developer</p>
              <p className="py-2"> <i class="fa-solid fa-phone"></i> Phone: +977 9809364854</p>
            </div>
          </div>
          <button className="bg-[#e65f78] text-white mt-5 h-[60px] w-[150px] px-[12px]">Download CV</button>
        </div>








      </div>


    </div>
  )
}
export default About