import {useEffect, useState, useRef} from "react";
import {motion, AnimatePresence} from "framer-motion";
import Header from "./Header.jsx";
import {MoveDown} from "lucide-react";

function App() {

    const jobList = ["Gian", "Carlo"]
    const clientAttributeList = ["Talent", "Skill", "Passion"]

    const [jobIndex, setJobIndex] = useState(0)
    const [clientAttributeIndex, setClientAttributeIndex] = useState(0)
    const [selectedItem, setSelectedItem] = useState(null);
    useEffect(() => {
        const interval = setInterval(() => {
            setJobIndex((jobIndex + 1) % jobList.length)
            setClientAttributeIndex((clientAttributeIndex + 1) % clientAttributeList.length)
        }, 3500)

        return () => clearInterval(interval)
    })

    const scrollRef = useRef(null);


    return (
        <div className="h-fit w-full overflow-x-hidden bg-base-100 relative">
            {Header()}
            <div className="h-dvh w-full bg-base-200 flex relative items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={jobIndex}
                        className="text-7xl font-semibold text-base-content"
                        initial={{opacity: 0, y: -50}}
                        animate={{opacity: 1, y: 0, transition: {duration: 0.5}}}
                        exit={{opacity: 0, y: 50, transition: {duration: 0.7}}}
                    >
                        The {" "} <span className="text-primary"> {jobList[jobIndex]} </span> for people with <span
                        className="text-primary"> {clientAttributeList[clientAttributeIndex]}</span>
                    </motion.div>
                </AnimatePresence>
                <MoveDown className="absolute size-6 animate-bounce top-4/5 z-10"/>
            </div>
            <div className="h-dvh w-full flex items-center justify-center bg-base-300 relative pt-20">
                <div className="absolute top-0 h-20 w-full p-6 flex items-center">
                    <motion.p
                        initial={{opacity: 0, x: -20}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 0.8, ease: "easeOut"}}
                        viewport={{once: true, amount: 1}}
                        whileHover={{scale: 1.01}}
                        className="text-4xl font-bold text-base-content"
                    >
                        Hey! I'm <span className="text-primary">Gian Carlo</span>, and these are my work!
                    </motion.p>
                </div>

                {/* Scroll container */}
                <div className="h-2/3 w-[95%] relative">
                    <div
                        ref={scrollRef}
                        className="h-full w-full overflow-x-scroll overflow-y-hidden flex flex-row scroll-smooth no-scrollbar"
                    >
                        <div className="absolute z-10  w-full h-full pointer-events-none">
                            <button className="absolute btn -left-10 top-1/2 pointer-events-auto"
                                    onClick={() => scrollRef.current.scrollLeft -= scrollRef.current.offsetWidth}> Left
                            </button>
                            <button className="absolute btn -right-10 top-1/2 pointer-events-auto"
                                    onClick={() => scrollRef.current.scrollLeft += scrollRef.current.offsetWidth}> Right
                            </button>
                        </div>
                        {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => (
                            <motion.div
                                key={index}
                                layoutId={`item-${index}`}
                                onClick={() => setSelectedItem(index)}
                                className={`aspect-square h-full cursor-pointer ${index % 2 === 0 ? 'bg-blue-500' : 'bg-yellow-500'}`}
                                whileHover={{scale: 1.05}}
                                transition={{duration: 0.2}}
                            />
                        ))}
                    </div>
                </div>

            </div>

            {/* Enlarged Item Modal */}
            <AnimatePresence>
                {selectedItem !== null && (
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        onClick={() => setSelectedItem(null)}
                        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-8 cursor-pointer"
                    >
                        <motion.div
                            layoutId={`item-${selectedItem}`}
                            className={`w-[80vmin] h-[80vmin] ${selectedItem % 2 === 0 ? 'bg-blue-500' : 'bg-yellow-500'}`}
                            onClick={(e) => e.stopPropagation()}
                        />
                        <motion.button
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            transition={{delay: 0.2}}
                            onClick={() => setSelectedItem(null)}
                            className="absolute top-8 right-8 text-white text-4xl font-bold hover:scale-110 transition-transform"
                        >
                            ×
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="h-dvh w-full flex flex-col items-center justify-center bg-base-200 relative">
                <motion.p
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                        transition: { duration: 3, delay: 0 },
                    }}
                    viewport={{ once: true }}
                    className="text-5xl text-primary font-bold"
                >
                    Allow me to become part of your adventure
                </motion.p>

                <motion.p
                    initial={{ opacity: 0}}
                    whileInView={{
                        opacity: 1,
                        transition: { duration: 3, delay: 3 },
                    }}
                    viewport={{ once: true }}
                    className="text-5xl text-base-content font-semibold"
                >
                    Just as you become part of mine
                </motion.p>
            </div>

        </div>

    );
}

export default App;
