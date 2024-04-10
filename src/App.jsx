import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Destinations from "./pages/Destinations.jsx";
import Crew from "./pages/Crew.jsx";
import Technology from "./pages/Technology.jsx";
import Header from './components/Header.jsx';

function App() {

  return (
    <>
      <BrowserRouter basename="/">
      
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="destinations" element={<Destinations />} />
          <Route path="crew" element={<Crew />} />
          <Route path="technology" element={<Technology />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
