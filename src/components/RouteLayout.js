import { Outlet } from "react-router"
import NavPage from "../pages/NavPage"

const RouteLayout = () => {
  return (
    <>
      <NavPage />
      <Outlet />
    </>
  )
}
export default RouteLayout