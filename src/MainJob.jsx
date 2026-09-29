import { mainJob } from "./data"

function MainJob () {
    return (
        <section className="flex flex-col gap-4 px-24 items-center">
            <h2 className="font-heading text-text-primary text-3xl font-bold">Pengalaman Kerja</h2>
            <div className="bg-card border border-accent rounded-2xl py-4 px-12 flex flex-col gap-2 max-w-fit items-center">
                <p className="text-text-secondary font-medium text-2xl">Pekerjaan Utama</p>
                <img src={mainJob.image} alt="" className="w-50"/>
                <h3 className="text-accent font-bold text-2xl">{mainJob.title}</h3>
                <div className="flex flex-col items-center">
                    <h4 className="font-body text-text-secondary font-bold">{mainJob.Company}</h4>
                    <p className="font-body text-text-secondary">{mainJob.year}</p>
                </div>
                <p>{mainJob.description}</p>
            </div>
        </section>
    )
}
export default MainJob;