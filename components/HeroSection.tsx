
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const GlitchText = ({ text, className }: { text: string; className?: string }) => {
    return (
        <div className={`relative ${className}`}>
            <span className="absolute inset-0 text-magenta-500" style={{ clipPath: 'inset(25% 0 55% 0)' }}>{text}</span>
            <span className="absolute inset-0 text-cyan-400" style={{ clipPath: 'inset(50% 0 30% 0)' }}>{text}</span>
            {text}
        </div>
    );
};


const HeroSection = ({ onEnter }: { onEnter: () => void }) => {
    const [isEntered, setIsEntered] = useState(false);

    const handleEnterClick = () => {
        setIsEntered(true);
        onEnter();
        setTimeout(() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
    }
    return (
        <section id="hero" className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden p-4">
            <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('/public/image/main.png')`, filter: 'grayscale(100%) brightness(0.9)' }}
            />
            <div className="z-10 text-center flex flex-col items-center">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.5, type: 'spring' }}
                    className="font-display text-5xl sm:text-7xl md:text-[8rem] lg:text-[12rem] text-white uppercase tracking-widest flicker"


                >
                    <GlitchText text="BEDLAM" />
                </motion.h1>
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="mt-16 mb-8 text-xl md:text-2xl text-orange-600 uppercase tracking-[0.2em]"
                >
                    The ocean swallowed the Earth. Hope faded.<br/> You are amid, the last voice in the storm.
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.8 }}
                    className="text-gray-400 mb-10 text-lg md:text-xl leading-relaxed font-mono max-w-6xl mx-auto"
                >
                    A thousand years after the collapse, Earth is no longer what it was. Now called Bedlam, ninety-five percent of the planet is swallowed beneath unending storms and saltwater. Humanity clings to floating cities called chukwari, built by ancient hands. At the heart rises Babel, a monumental alien tower that stretches both skywards and sea-wards. You are the Amid, leader of a fishermen’s chukwa, tasked with guiding your people through the next Pralay.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: isEntered ? 0 : 1, scale: isEntered ? 0.5 : 1 }}
                    transition={{ duration: 0.5, delay: 2 }}
                    className="flex flex-col sm:flex-row sm:space-x-6 items-center"


                >
                    <button
                        onClick={handleEnterClick}
                        className="px-10 mt-5 py-3 rounded-lg border-2 border-amber-400 bg-amber-400 shadow-[0_0_20px_rgba(255,210,100,0.9)] text-black uppercase text-xl tracking-widest font-display hover:shadow-[0_0_35px_rgba(255,220,100,0.9)] transition-all duration-300"
                    >
                        Play Game
                    </button>

                    <button
                        onClick={handleEnterClick}
                        className=" px-10 mt-5 py-3 rounded-lg border-2 border-amber-400 text-amber-400 uppercase text-xl tracking-widest font-display  hover:shadow-[0_0_35px_rgba(255,220,100,0.9)] transition-all duration-300"
                    >
                        Game Rule
                    </button>


                </motion.div>
            </div>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ duration: 1.5, delay: 1.8 }}
                className="text-center text-gray-400 text-sm mt-10 tracking-wide"
            >
                3–6 Players • Turn-based Strategy • Ages 12+
            </motion.p>
        </section>
    );
};

export default HeroSection;
