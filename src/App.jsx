import AuroraBackground from "./components/AuroraBackground";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { auroraConfig } from "./data";
import { Route, Routes } from "react-router";
import GaleriDesign from "./pages/GaleriDesign";


function App(){
    return(
        <div className="bg-background text-text-primary font-body min-h-screen relative isolate">
            {auroraConfig.map((item) => {
                return(
                    <AuroraBackground key={item.id} warna={item.warna} animate={item.animate} />
                )
            })}
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/galeri-design" element={<GaleriDesign />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App;