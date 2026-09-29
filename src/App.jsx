import AuroraBackground from "./components/AuroraBackground";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { auroraConfig } from "./data";


function App(){
    return(
        <div className="bg-background text-text-primary font-body min-h-screen relative isolate">
            {auroraConfig.map((item) => {
                return(
                    <AuroraBackground key={item.id} warna={item.warna} animate={item.animate} />
                )
            })}
            <Navbar />
            <Footer />
        </div>
    )
}

export default App;