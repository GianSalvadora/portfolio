import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function App() {

    const jobList = ["Gian", "Carlo"]
    const clientAttributeList = ["Talent", "Skill", "Passion"]

    const [jobIndex, setJobIndex] = useState(0)
    const [clientAttributeIndex, setClientAttributeIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setJobIndex((jobIndex + 1) % jobList.length)
            setClientAttributeIndex((clientAttributeIndex + 1) % clientAttributeList.length)
        }, 3500)

        return () => clearInterval(interval)
    })

    return (
        <div className="h-dvh w-dvw flex justify-center items-center bg-base-200">
            <AnimatePresence mode="wait">
                <motion.div
                    key={jobIndex}
                    className="text-7xl font-semibold text-secondary"
                    initial={{ opacity: 0, y: -50}}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                    exit={{ opacity: 0, y: 50, transition: { duration: 0.7 } }}
                >
                    The {" "} <span className="text-primary"> {jobList[jobIndex]} </span> for people with <span className="text-primary"> {clientAttributeList[clientAttributeIndex]}</span>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default App;
