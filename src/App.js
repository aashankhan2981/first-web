import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages";
import { About } from "./pages/about";
import { Menu } from "./pages/menu";

function App() {
  
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      {/* <Dropdown/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/menu" element={<Menu/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
