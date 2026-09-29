import { keahlian } from "../data";
import { BiFolderOpen } from "react-icons/bi";
import FotoProfile from "./assets/photo-profile.png";

function TentangSaya(){
      return(
        <section className="px-24 rounded-3xl relative">
            <div className="flex justify-between bg-card rounded-2xl p-10 border border-accent">
                <div className="flex flex-col gap-4 max-w-sm">
                    <p className="font-body text-text-secondary font-semibold text-2xl">Saya Seorang</p>
                    <h1 className="font-heading text-text-primary font-bold text-3xl">E-Commerce Staff</h1>
                    <p className="font-body text-base">Saya bekerja di PT Mitra Hub Indonesia dari Mei 2023 hingga saat ini. Pekerjaan saya berfokus pada web master CMS Wordpress dan Design Grafis. Saya terbiasa bekerja lintas divisi untuk membantu kebutuhan design pada masing masing divisi.</p>
                    <button className="bg-accent text-text-primary rounded-2xl px-6 py-4">Lihat Selengkapnya</button>
                    <div className="flex gap-4 p-8 bg-background border-accent border rounded-2xl items-center">
                        <BiFolderOpen className="text-6xl text-accent"/>
                        <h2>Lihat Portfolio Saya</h2>
                    </div>
                </div>
                <img src={FotoProfile} className="absolute w-lg bottom-0 left-135" />
                <div className="flex flex-col gap-10"> 
                    <h1 className="font-heading font-bold text-2xl">Keahlian</h1>
                    <div className="grid grid-cols-3 gap-4">
                        {keahlian.map((item) => {
                            const IconComponent = item.icon;
                            return (
                                <div key={item.id} className="flex flex-col items-center">
                                    <IconComponent className="text-6xl text-accent"/>
                                    <p className="font-body text-2">{item.keahlian}</p>
                                </div>
                            )                       
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TentangSaya;