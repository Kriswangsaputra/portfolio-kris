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
            <section id="tentang-saya">
                <Hero />
                <TentangSaya />
                <KontakCard/>
            </section>
            <section id="pengalaman-kerja">
                <MainJob />
                <SupportJob />
            </section>
            <section id="project">
                <Project project={project} tombol="Kunjungi Website" sectionName="Project"/>
                <Project project={dummyProjectFinal} tombol="Lihat Selengkapnya" sectionName="Project Dummy"/>
                <DesignGrafis sectionName="Design Grafis" data={finalDesignGrafis} />
            </section>
            <section id="sertifikat-pelatihan">
                <SertifikatPelatihan />
            </section>
            <section id="hubungi-saya">
                <HubungiSaya />
            </section>
        </div>
    )
}

export default Home;