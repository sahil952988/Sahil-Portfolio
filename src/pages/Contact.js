const Contact = () => {
  return (
    <div>
      <div className=" ml-5 lg:ml-[250px]  mt-10">
        <p className="text-red-500 text-[17px]">CONTACT</p>
        <p className="text-[30px] font-extrabold">Get In Touch</p>
      </div>
      <div>
        <p className="ml-5 lg:ml-[250px]  mt-10 lg:mr-[800px] text-[16px]">Please fill out the form on this section to contact with me. Or call between 9:00 a.m. and 8:00 p.m. ET, Sunday through Friday</p>
      </div>
      <form>
        <input className="lg:w-[470px] border-2 border-gray-400 lg:max-w-[470px] h-[40px] pl-3 ml-5 lg:ml-[250px] mt-5 mr-5" type="text" placeholder="name" />
        <br />
        <input className="border-2 border-gray-400 h-[40px] lg:w-[470px] ml-5 pl-3 lg:ml-[250px] lg:max-w-[470px]  mt-3 mr-5" type="email" placeholder="name@mail.com" />


      </form>
      <button className="bg-red-400 border-2 border-red-400 lg:ml-[250px] mt-5 h-[50px] w-[200px] ml-5">SEND MESSAGE</button>



    </div>
  )
}
export default Contact