import { Kontak } from "./data";

function KontakCard() {
    return(
        <section className="px-24 p-10">
            <div className="grid grid-cols-6 gap-8 bg-card p-12 rounded-2xl border border-accent">
                {Kontak.map((item) => {
                    const IconContact = item.icon;
                    return (
                        <div key={item.id} className="flex flex-col gap-2 items-center">
                            <IconContact className="text-accent text-4xl" />
                            <p className="font-body text-text-secondary text-base">{item.label}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default KontakCard;