import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowLeftCircle } from "react-icons/fi";

const GlitchText = ({ text }: { text: string }) => (
    <motion.div
        key={text}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="font-display text-3xl md:text-5xl text-center text-glow-cyan uppercase tracking-widest"
    >
        {text.split("").map((char, i) => (
            <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.05, delay: i * 0.02 }}
            >
                {char}
            </motion.span>
        ))}
    </motion.div>
);

const tabs = [
    "Introduction",
    "Core Gameplay",
    "Player Actions",
    "Conflict and Risks",
    "Economy",
    "Problems and Events",
    "Politics",
    "Endgame",
    "Keywords",
] as const;

type TabKey = (typeof tabs)[number];

const text: Record<TabKey, string> = {
    Introduction: `Bedlam is a survival strategy game on a drowned Earth. 
You lead a floating city called a chukwa. 
Guide your people through storms, scarcity, raids, and politics. 
The Pralay is coming. Survive it.

Players: 3 to 6.  
Time: 60 to 90 minutes.  
Goal: keep your city alive until the Pralay ends.
`,

    "Core Gameplay": ` Setup  
• Each player starts with a chukwa board, Stability 3, Population 3, Sal 3.  
• Start with Food 2, Water 2, Metal 1, Energy 1.  
• Draw 1 Crackerjack.  
• Shuffle all decks.  
• Set Pralay timer to 0.  
• Alpha (round counter) starts at 1.

Turn Structure  
1. Icarian Interface (d10 roll)  
2. Action Phase (two actions)  
3. Random Event  
4. End of Turn  

Every 3 Alphas, hold a Redaz Council.
`,

    "Player Actions": `Each turn you take two actions. You may repeat the same action.

Available actions:
• Expedition  
• Raid  
• Trade with the Spire  
• Resolve a City Problem  
• Convert resources into Sal or vice versa  
• Play Tech or Weapon cards that say "Action"

Notes  
• Free actions do not consume your main two actions.  
• You cannot Expedition and Raid the same player in the same turn.
`,

    "Conflict and Risks": `Expeditions  
Roll d20 (spend 1 Energy for +1).  
1 to 5: Hazard. Lose resource. Stability -1.  
6 to 9: Gain 1 resource.  
10 to 14: Gain 2 resources or 1 Metal.  
15 to 18: Draw Expedition + 2 Sal.  
19 to 20: Big haul. Draw Expedition + Weapon/Tech.

Raids  
1. Reveal Weapons and Tech  
2. Add Combat Power (base 1 + Weapon + bonuses)  
3. Spend 1 Energy for +1 (optional)  
4. Roll d6  
5. Higher total wins

Attacker wins: steal 2 resources OR 1 Sal + 1 resource. Defender Stability -1.  
Defender wins: attacker loses 1 random resource and Stability -1.

Suspicion rises by 1 for both players after a raid.
`,

    Economy: `Trade  
• 1 Sal ↔ any basic resource  
• 2 Sal → 1 Metal  
• 3 Sal → Weapon  
• 3 Sal → Tech  

Selling  
• Metal → 1 Sal  
• Weapon/Tech → 2 Sal  

Bargaining  
• Discard 1 Kiseki to reduce cost by 1 Sal (one time per turn).
`,

    "Problems and Events": `Problems  
• Appear via Events or Redaz  
• Show a timer and a cost  
• Resolve by paying listed cost  
• If timer expires → penalty (often Stability or Population loss)

Random Events  
Types:  
• Instant  
• Ongoing  
• Global  

Players may help each other for Favor.  
Favor can later be spent for +1 on a roll or a small resource gift.
`,

    Politics: `Redaz Council  
Occurs every time Alpha is divisible by 3.

1. Choose Host (pay 1 Sal or 1 Food or take Stability -1)  
2. Draw 3 cards, play 1 face down  
3. Host reveals and resolves in seat order  
4. Deals and votes if card allows  
5. Reset Suspicion to 0

Common outcomes  
• Taxes or relief  
• Bans on Raids or Trades  
• Sabotage  
• Temporary alliances  
• Market shifts
`,

    Endgame: `Pralay  
Triggered when global timer reaches final space.

During Pralay:  
• Skip Icarian  
• All players take final turns  
• After the round, check survival:

Survival requirements  
• Food 2, Water 2, Metal 1, Energy 1  
• Stability 3+  
• Population 2+  
• No unresolved lethal Problem  

If you meet all, you survive and become Bletsian.

Victory  
• If only one survives, they win  
• If two or more survive, shared victory
`,

    Keywords: `Chukwa: your floating city  
Sal: currency used with the Spire  
Alpha: round counter  
Icarian: the d10 roll at start of turn  
Kiseki: twist cards  
Crackerjack: unique specialist  
Problem: timed issue requiring resources  
Favor: promise token from cooperation  
Bletsian: survivor status  
Host: player leading the Redaz
`,
};

const RulePage = () => {
    const [active, setActive] = useState<TabKey>("Introduction");

    return (
        <div className="w-full min-h-screen bg-black flex flex-col items-center p-4 py-20 relative">
            <div className="absolute inset-0 bg-grid-cyan opacity-10 pointer-events-none"></div>

            <Link
                to="/"
                className="absolute bottom-5 left-5 text-cyan-400 hover:text-white transition-all duration-300 z-10"
            >
                <motion.div
                    whileHover={{ scale: 1.1, filter: "drop-shadow(0 0 10px #00ffff)" }}
                    className="flex items-center gap-2 text-glow-cyan"
                >
                    <FiArrowLeftCircle size={32} />
                    <span className="hidden md:inline">Return to Main Site</span>
                </motion.div>
            </Link>

            <GlitchText text="Bedlam Rulebook" />

            <div className="flex flex-wrap justify-center gap-3">
                {tabs
                    .filter((t) => t !== "Introduction")
                    .map((t) => (
                        <button
                            key={t}
                            onClick={() => setActive(t)}
                            className={`px-5 py-2 rounded-full mt-20 text-sm md:text-base uppercase tracking-wide border-2 transition-all ${active === t
                                ? "bg-magenta-500 text-white border-magenta-500"
                                : "border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
                                }`}
                        >
                            {t}
                        </button>
                    ))}
            </div>

            <div className="w-full max-w-4xl">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={active}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.35 }}
                        className="neon-scroll bg-black/40 border-2 mt-20 border-cyan-400/40 rounded-lg p-8 backdrop-blur-sm text-gray-300 text-lg whitespace-pre-line leading-relaxed h-[480px] overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-400 scrollbar-track-black"

                    >
                        {text[active]}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default RulePage;
