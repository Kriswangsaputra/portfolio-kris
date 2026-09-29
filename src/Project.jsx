import { motion } from "framer-motion";


function Project(props) {
    return(
        <section className="flex flex-col px-24 py-12 gap-8 items-center">
            <h2 className="font-heading text-text-primary text-3xl font-bold">{props.sectionName}</h2>
            <div className="grid grid-cols-2 gap-12">
                {props.project.map((item) => {
                     return (
                        <motion.div
                        key={item.id}
                        initial={{opacity:0, y:80}}
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:1}}
                        >
                            <div className="flex gap-3 bg-card border border-accent rounded-2xl p-6">
                                <div className="flex flex-col gap-3">
                                    <h2 className="font-heading font-bold text-2xl text-accent">{item.projectTitle}</h2>
                                    <p className="font-body text-base">{item.projectDescription}</p>
                                    <a href={item.projectLink} className="bg-accent w-2xs px-6 py-4 mt-6 rounded-2xl text-center">{props.tombol}</a>
                                </div>
                                <img src={item.projectImage} alt="" className="size-85" />
                            </div>
                        </motion.div>
                        )
                })}
            </div>
        </section>

    )
}

export default Project;