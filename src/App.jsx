import {useEffect, useState, useRef} from "react";
import {motion, AnimatePresence} from "framer-motion";
import Header from "./Header.jsx";
import {MoveDown, ChevronLeft, ChevronRight} from "lucide-react";

function App() {

    const jobList = ["Gian", "Carlo"]
    const clientAttributeList = ["Talent", "Skill", "Passion"]

    const portfolioItems = [
        {
            id: 0,
            title: "Colegio De Muntinlupa Website",
            description: "A modern, responsive website for educational institution featuring student portal, faculty management, and online enrollment system.",
            desktop_image: "https://picsum.photos/seed/1/1280/720",
            phone_image: "https://picsum.photos/seed/1/720/1280",
        },
        {
            id: 1,
            title: "E-Commerce Mobile App",
            description: "Full-featured shopping app with cart management, payment integration, and real-time order tracking.",
            desktop_image: "https://picsum.photos/seed/2/1280/720",
            phone_image: "https://picsum.photos/seed/2/720/1280",
        },
        {
            id: 2,
            title: "Portfolio Dashboard",
            description: "Analytics dashboard for tracking website metrics, user engagement, and performance statistics.",
            desktop_image: "https://picsum.photos/seed/3/1280/720",
            phone_image: "https://picsum.photos/seed/3/720/1280",
        },
        {
            id: 3,
            title: "Fitness Tracker App",
            description: "Mobile application for workout planning, calorie tracking, and progress monitoring.",
            desktop_image: "https://picsum.photos/seed/4/1280/720",
            phone_image: "https://picsum.photos/seed/4/720/1280",
        },
        {
            id: 4,
            title: "Restaurant Booking System",
            description: "Web platform for restaurant reservations with table management and menu ordering features.",
            desktop_image: "https://picsum.photos/seed/5/1280/720",
            phone_image: "https://picsum.photos/seed/5/720/1280",
        },
        {
            id: 5,
            title: "Social Media App",
            description: "Social networking mobile app with posts, stories, messaging, and live streaming capabilities.",
            desktop_image: "https://picsum.photos/seed/6/1280/720",
            phone_image: "https://picsum.photos/seed/6/720/1280",
        },
        {
            id: 6,
            title: "Project Management Tool",
            description: "Collaborative workspace for teams with task tracking, time logging, and project analytics.",
            desktop_image: "https://picsum.photos/seed/7/1280/720",
            phone_image: "https://picsum.photos/seed/7/720/1280",
        },
        {
            id: 7,
            title: "Music Streaming App",
            description: "Mobile music player with playlist creation, offline mode, and personalized recommendations.",
            desktop_image: "https://picsum.photos/seed/8/1280/720",
            phone_image: "https://picsum.photos/seed/8/720/1280",
        }
    ];


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
            <hr/>
            <div className="h-dvh w-full flex items-center flex-col justify-center bg-base-200 relative pt-20">
                <div className="h-20 w-full p-12 flex items-center">
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
                        <div className="absolute z-10 w-full h-full pointer-events-none">
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
                                <div className="w-full h-20 flex justify-start items-center z-10 p-6 absolute bottom-0 bg-gradient-to-r from-base-300 from-[60%] to-transparent to-[100%]">
                                    <p className="text-3xl font-semibold text-white">{item.title}</p>
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
                        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-8 cursor-pointer"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-base-200 rounded-lg cursor-default flex flex-col gap-6 p-6"
                        >
                            <div className="flex flex-row gap-6 items-stretch">
                                {/* Desktop mockup */}
                                <div className='aspect-video h-[30em]'>
                                    <div className="mockup-browser border-white border h-full bg-base-300 flex flex-col">
                                        <div className="mockup-browser-toolbar flex-shrink-0">
                                            <div className="input">{selectedItem.title}</div>
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
                                <div className='aspect-[9/16] h-[30em]'>
                                    <div className="w-full bg-neutral-500 h-full p-1 rounded-xl flex flex-col">
                                        <div className="w-full bg-neutral-900 flex-1 rounded-xl overflow-hidden">
                                            <img
                                                src={selectedItem.phone_image}
                                                alt={`${selectedItem.title} - Mobile`}
                                                className="w-full h-full object-fill"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Description below */}
                            <div className="flex flex-col">
                                <h2 className="text-3xl font-bold text-primary mb-3">{selectedItem.title}</h2>
                                <p className="text-base-content text-lg w-1/2">{selectedItem.description}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <hr/>
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