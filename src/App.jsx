import {useEffect, useState, useRef} from "react";
import {motion, AnimatePresence} from "framer-motion";
import Header from "./Header.jsx";
import {MoveDown, ChevronLeft, ChevronRight, Send} from "lucide-react";

import CDM_mobile from "./assets/CDM_Mobile.png"
import CDM_desktop from "./assets/CDM_Browser.png"
import SEAA_mobile from "./assets/SEAA_Mobile.png"
import SEAA_desktop from "./assets/SEAA_Browser.png"
import ISLA_mobile from "./assets/ISLA_Mobile.png"
import ISLA_desktop from "./assets/ISLA_Browser.png"
import Dice_Desktop from  "./assets/Dice_Desktop.png"

function App() {

    const jobList = ["Gian", "Carlo"]
    const clientAttributeList = ["Talent", "Skill", "Passion", "Vision", "Dreams", "Goals", "Ambition", "Courage", "Strength"]


    const portfolioItems = [
        {
            id: 0,
            title: "Colegio De Muntinlupa Website",
            description: "A modern, responsive website for educational institution featuring student portal, faculty management, and online enrollment system.",
            desktop_image: CDM_desktop,
            phone_image: CDM_mobile,
        },
        {
            id: 1,
            title: "Association Website",
            description: "Full-featured Membership management for an EMT Association.",
            desktop_image: SEAA_desktop,
            phone_image: SEAA_mobile,
        },
        {
            id: 2,
            title: "Integrated Solution Website",
            description: "All in one management web app for an entire school.",
            desktop_image: ISLA_desktop,
            phone_image: ISLA_mobile,
        },
        {
            id: 3,
            title: "Dice Game - Roblox",
            description: "An incremental game on Roblox",
            desktop_image: Dice_Desktop,
        }
    ];


    const [jobIndex, setJobIndex] = useState(0)
    const [clientAttributeIndex, setClientAttributeIndex] = useState(0)
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setJobIndex((jobIndex + 1) % jobList.length)
            setClientAttributeIndex((clientAttributeIndex + Math.round(Math.random() + 1)) % clientAttributeList.length)
        }, 3500)

        return () => clearInterval(interval)
    })

    const scrollRef = useRef(null);


    return (
        <div className="h-fit w-full overflow-x-hidden bg-base-100 relative">
            {Header()}
            <div className="h-dvh w-full fixed z-10 inset-0 pointer-events-none flex justify-end items-end p-4 md:p-8 lg:p-12">
                <button
                    className="pointer-events-auto bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-full lg:rounded-xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-2 text-sm md:text-base"
                    onClick={() => window.open("https://www.facebook.com/carlo.231887/", "_blank")}
                >
                    <Send className="w-4 h-4 md:w-5 md:h-5"/>
                    <p> Contact Now </p>
                </button>
            </div>
            <div className="h-dvh w-full bg-base-200 flex relative items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={jobIndex}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold text-base-content text-center px-4"
                        initial={{opacity: 0, y: -50}}
                        animate={{opacity: 1, y: 0, transition: {duration: 0.5}}}
                        exit={{opacity: 0, y: 50, transition: {duration: 0.7}}}
                    >
                        The {" "} <span className="text-primary"> {jobList[jobIndex]}
                        </span>  for <br className="md:hidden"/> people with <span
                        className="text-primary"> {clientAttributeList[clientAttributeIndex]}</span>
                    </motion.div>
                </AnimatePresence>
                <MoveDown className="absolute size-6 animate-bounce top-4/5 z-10"/>
            </div>
            <hr/>
            <div className="h-dvh w-full flex items-center flex-col justify-center bg-base-200 relative pt-20">
                <div className="h-auto w-full p-4 md:p-8 lg:p-12 flex items-center">
                    <motion.p
                        initial={{opacity: 0, x: -20}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 0.8, ease: "easeOut"}}
                        viewport={{once: true, amount: 0.5}}
                        whileHover={{scale: 1.01}}
                        className="text-2xl md:text-4xl font-bold text-base-content"
                    >
                        Hey! I'm <span className="text-primary">Gian Carlo</span>, <br className="lg:hidden"/> and I'm proud of these PROJECTS!
                    </motion.p>
                </div>

                {/* Scroll container */}
                <div className="h-1/3 md:h-2/3 w-[95%] relative">
                    <div
                        ref={scrollRef}
                        className="h-full w-full overflow-x-scroll overflow-y-hidden flex flex-row scroll-smooth no-scrollbar"
                    >
                        <div className="absolute z-10 w-full h-full pointer-events-none hidden md:block">
                            <button
                                className="absolute -left-5 top-1/2 -translate-y-1/2 pointer-events-auto w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 flex items-center justify-center"
                                onClick={() => scrollRef.current.scrollLeft -= scrollRef.current.offsetWidth}
                            >
                                <ChevronLeft className="w-6 h-6 text-white" />
                            </button>
                            <button
                                className="absolute -right-5 top-1/2 -translate-y-1/2 pointer-events-auto w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 flex items-center justify-center"
                                onClick={() => scrollRef.current.scrollLeft += scrollRef.current.offsetWidth}
                            >
                                <ChevronRight className="w-6 h-6 text-white" />
                            </button>
                        </div>
                        {portfolioItems.map((item) => (
                            <motion.div
                                key={item.id}
                                layoutId={`item-${item.id}`}
                                onClick={() => setSelectedItem(item)}
                                className="aspect-square h-full relative cursor-pointer bg-base-300"
                                whileHover={{scaleX: 1.05}}
                                transition={{duration: 0.2}}>
                                <img
                                    src={item.desktop_image}
                                    className="w-full h-full object-cover"
                                />

                                {/* Title overlay */}
                                <div className="w-full h-16 md:h-20 flex justify-start items-center z-[9] p-3 md:p-6 absolute bottom-0 bg-gradient-to-r from-base-300 from-[60%] to-transparent to-[100%]">
                                    <p className="text-lg md:text-2xl lg:text-3xl font-semibold text-white line-clamp-2">{item.title}</p>
                                </div>
                            </motion.div>
                        ))}

                    </div>
                </div>

            </div>
            <AnimatePresence>
                {selectedItem !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedItem(null)}
                        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 md:p-8 cursor-pointer overflow-y-auto"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-base-200 rounded-lg cursor-default flex flex-col gap-4 md:gap-6 p-4 md:p-6 max-w-6xl w-full my-auto"
                        >
                            <div className="flex flex-col lg:flex-row gap-4 md:gap-6 items-stretch">
                                {/* Desktop mockup */}
                                <div className='w-full lg:aspect-video lg:h-[30em]'>
                                    <div className="mockup-browser border-white border h-full bg-base-300 flex flex-col">
                                        <div className="mockup-browser-toolbar flex-shrink-0">
                                            <div className="input text-xs md:text-sm">{selectedItem.title}</div>
                                        </div>
                                        <div className="flex-1 w-full overflow-hidden">
                                            <img
                                                src={selectedItem.desktop_image}
                                                alt={selectedItem.title}
                                                className="w-full h-full object-fill"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Mobile mockup */}
                                {(selectedItem.phone_image && <div className='w-1/2 mx-auto lg:w-auto lg:aspect-[9/18] lg:h-[30em]'>
                                    <div className="w-full bg-neutral-500 h-full p-1 rounded-xl flex flex-col">
                                        <div className="w-full bg-neutral-900 flex-1 rounded-xl overflow-hidden">
                                            <img
                                                src={selectedItem.phone_image}
                                                alt={`${selectedItem.title} - Mobile`}
                                                className="w-full h-full object-fill"
                                            />
                                        </div>
                                    </div>
                                </div>)}
                            </div>

                            {/* Description below */}
                            <div className="flex flex-col">
                                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 md:mb-3">{selectedItem.title}</h2>
                                <p className="text-base-content text-base md:text-lg w-full lg:w-1/2">{selectedItem.description}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            <hr/>
            <div className="h-dvh w-full flex flex-col items-center justify-center bg-base-200 relative px-4">
                <motion.p
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                        transition: { duration: 3, delay: 0 },
                    }}
                    viewport={{ once: true }}
                    className="text-lg md:text-4xl lg:text-5xl text-primary font-bold text-center"
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
                    className="text-xl md:text-4xl lg:text-5xl text-base-content font-semibold text-center"
                >
                    Just as you become part of mine
                </motion.p>
            </div>

        </div>

    );
}

export default App;