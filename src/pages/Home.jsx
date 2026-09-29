import { auroraConfig, dummyProjectFinal, finalDesignGrafis, project } from "../data";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TentangSaya from "../components/TentangSaya";
import KontakCard from "../components/Kontak";
import MainJob from "../components/MainJob";
import SupportJob from "../components/SupportJob";
import Project from "../components/Project";
import DesignGrafis from "../components/DesignGrafis";
import SertifikatPelatihan from "../components/SertifikatPelatihan";
import HubungiSaya from "../components/HubungiSaya";
import Footer from "../components/Footer";

function Home() {
    return(
        <div className="bg-background text-text-primary font-body min-h-screen relative isolate">
            {auroraConfig.map((item) => {
                return(
                    <AuroraBackground key={item.id} warna={item.warna} animate={item.animate} />
                )
            })}
        </div>
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
    )
}

export default Home;