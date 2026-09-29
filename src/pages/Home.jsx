import { dummyProjectFinal, finalDesignGrafis, project } from "../data";
import Hero from "../components/Hero";
import TentangSaya from "../components/TentangSaya";
import KontakCard from "../components/Kontak";
import MainJob from "../components/MainJob";
import SupportJob from "../components/SupportJob";
import Project from "../components/Project";
import DesignGrafis from "../components/DesignGrafis";
import SertifikatPelatihan from "../components/SertifikatPelatihan";
import HubungiSaya from "../components/HubungiSaya";

function Home() {
    return(
        <div>
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
        </div>
    )
}

export default Home;