import { finalSertifikatPelatihan } from "../data";

function SertifikatPelatihan() {
    return(
        <section className="flex flex-col px-24 py-12 gap-8 items-center">
            <h2 className="font-heading text-text-primary text-3xl font-bold">Sertifikat & Pelatihan</h2>
            <div className="grid grid-cols-3 gap-8">
                {finalSertifikatPelatihan.map((item) => {
                    return (
                        <div key={item.id} className=" flex flex-col gap-6 items-center bg-card p-8 rounded-2xl border border-accent">
                            <h4 className="font-body text-text-primary font-bold">{item.name}</h4>
                            <img src={item.image} alt="" className="w-full" />
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default SertifikatPelatihan;