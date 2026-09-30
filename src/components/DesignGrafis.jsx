import { Link } from "react-router";

function DesignGrafis(props) {
    return(
        <section className="flex flex-col px-24 py-12 gap-8 items-center">
            <h2 className="font-heading text-text-primary text-3xl font-bold">{props.sectionName}</h2>
            <div className="columns-4 gap-6">
                {props.data.map((item) => {
                    return(
                        <div key={item.id} className="mb-6">
                            <img src={item.designGrafisImage} alt="" className="w-full" />
                        </div>
                        );
                })}
            </div>
            <Link to="/galeri-design" className="bg-accent text-text-primary rounded-md px-4 py-1">
                Lihat Selengkapnya
            </Link>
        </section>
    )
}

export default DesignGrafis;