
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";


function App() {
  return (
      <>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Contact' element={<Contact/>} />
            <Route path='/Favs' element={<Favs/>} />
            <Route path='/Dentista/:id' element={<Detail/>}/>
          </Routes>
          <Footer/>
      </>
  );
}

export default App;
