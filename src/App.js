import RouteLayout from "./components/RouteLayout"
import { Route, Routes } from 'react-router'
import About from "./pages/About"
import HomePage from "./pages/HomePage"
import Services from "./pages/Services"
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RouteLayout />} >
        <Route path="about" element={<About />} />
        <Route path="Services" element={<Services />} />
        <Route path="Portfolio" element={<Portfolio />} />
        <Route path="Contact" element={<Contact />} />
      </Route>
      <Route index element={<HomePage />} />

    </Routes >
  )
}
export default App