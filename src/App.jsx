import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import {Route, Routes} from "react-router-dom"
import Error from "./pages/Error"
import Navbar from "./components/Navbar"
function App() {

  return (
    <>
      <Navbar/>
 
      
       <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="about" element ={<About/>}/>
        <Route path="contact" element ={<Contact/>}/>
        <Route path="*" element={<Error/>}/>
       </Routes>
    </>
  )
}

export default App;
