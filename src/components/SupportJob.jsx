import { supportJob } from "../data";

function SupportJob() {
    return (
        <section className="flex flex-col gap-6 items-center px-24 py-12">
            <p className="font-body text-2xl">Dalam pekerjaan saya, saya juga menjadi tim support untuk</p>
            <div className="grid grid-cols-3 gap-6 justify-between">
                {supportJob.map((item) => {
                    const JobIcon = item.image;
                    return (
                        <div key={item.id} className="flex flex-col gap-2 items-center bg-card border border-accent rounded-2xl p-5">
                            <JobIcon className="text-accent text-7xl" />
                            <h2 className="font-heading text-2xl font-bold">{item.title}</h2>
                            <h4 className="font-body text-text-secondary">{item.company}</h4>
                            <p className="font-body text-text-secondary">{item.year}</p>
                            <p className="text-center font-body font-base">{item.description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default SupportJob;