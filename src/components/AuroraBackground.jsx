import { motion } from "framer-motion";

function AuroraBackground(props){
    return(
        <div className="absolute inset-0 overflow-hidden -z-10">
            <motion.div className={`absolute w-100 h-100 ${props.warna} rounded-full blur-3xl opacity-20`}
            animate={props.animate}
            transition={{
                duration:15,
                repeat: Infinity,
                repeatType: "loop",
            }}
            >
            </motion.div>
        </div>
    )
}

export default AuroraBackground;