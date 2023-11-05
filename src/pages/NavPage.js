import { useNavigate } from "react-router"
import { NavLink } from "react-router-dom";

const NavPage = () => {
  const nav = useNavigate();
  return (
    <div>
      <nav className="flex shadow-lg">
        <p className=" hidden lg:block lg:ml-[200px] mt-5"><i class="fa-brands fa-staylinked"></i></p>
        <div className=" flex lg:ml-[600px] mt-8 space-x-5">
          <NavLink to="/"><p className="hidden lg:block hover:text-red-500">Home</p></NavLink>
          <NavLink to="about"><p className="hidden lg:block hover:text-red-500">About</p></NavLink>
          <NavLink to="Services"> <p className="hidden lg:block hover:text-red-500">Services</p></NavLink>
          <NavLink to="Portfolio"> <p className="hidden lg:block hover:text-red-500">Portfolio</p></NavLink>
          <NavLink to="Contact"><p className="hidden lg:block hover:text-red-500">Contact</p></NavLink>
        </div>
      </nav>
    </div >
  )
}
export default NavPage