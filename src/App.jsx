import Navbar from "./Navbar";
import Hero from "./Hero";
import TentangSaya from "./TentangSaya";
import KontakCard from "./Kontak";
import MainJob from "./MainJob";
import SupportJob from "./SupportJob";
import Project from "./Project";
import DesignGrafis from "./DesignGrafis";
import { auroraConfig, dummyProjectFinal, finalDesignGrafis, project } from "./data";
import SertifikatPelatihan from "./SertifikatPelatihan";
import HubungiSaya from "./HubungiSaya";
import Footer from "./Footer";
import AuroraBackground from "./AuroraBackground";

function App(){
    return(
        <div className="bg-background text-text-primary font-body min-h-screen relative isolate">
            {auroraConfig.map((item) => {
                return(
                    <AuroraBackground key={item.id} warna={item.warna} animate={item.animate} />
                )
            })}
            <Navbar />
            <Hero />
            <TentangSaya />
            <KontakCard/>
            <MainJob />
            <SupportJob />
            <Project project={project} tombol="Kunjungi Website" sectionName="Project"/>
            <Project project={dummyProjectFinal} tombol="Lihat Selengkapnya" sectionName="Project Dummy"/>
            <DesignGrafis sectionName="Design Grafis" data={finalDesignGrafis} />
            <SertifikatPelatihan />
            <HubungiSaya />
            <Footer />
        </div>
    )
}

export default App;