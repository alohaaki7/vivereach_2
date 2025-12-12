'use client';

import { useState } from 'react';
import Spotlight from '../ui/Spotlight';
import RevealText from '../animations/RevealText';
import { Crosshair } from '@/lib/icons';

interface ServiceCardProps {
    number: string;
    title: string;
    desc: string;
    className?: string;
    gradient?: string;
}

function ServiceCard({ number, title, desc, className = "", gradient }: ServiceCardProps) {
    const [hovered, setHovered] = useState(false);

    return (
        <Spotlight className={`border border-[#ffffff10] bg-black relative group overflow-hidden ${className}`}>
            <div
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="relative h-full flex flex-col justify-between p-4 md:p-6 transition-colors duration-500 hover:bg-white/[0.02]"
            >
                {/* Background Noise & Gradient */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
                {gradient && (
                    <div className={`absolute inset-0 opacity-20 transition-opacity duration-500 ${hovered ? 'opacity-40' : 'opacity-20'}`}
                        style={{ background: gradient }} />
                )}

                {/* Corner Accents */}
                <div className={`absolute top-0 left-0 w-8 h-8 border-t border-l border-[#d9ff00]/30 transition-all duration-500 ${hovered ? 'w-full h-full border-[#d9ff00]/50' : ''}`} />
                <div className={`absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#d9ff00]/30 transition-all duration-500 ${hovered ? 'w-full h-full border-[#d9ff00]/50' : ''}`} />

                {/* Header */}
                <div className="relative z-10 flex justify-between items-start mb-2 md:mb-4">
                    <div className={`font-mono text-xs tracking-wider transition-colors duration-300 ${hovered ? 'text-[#d9ff00]' : 'text-gray-500'}`}>
                        {number}
                    </div>
                </div>

                {/* Content */}
                <div className="relative z-10 mt-auto">
                    <h3 className="text-xl md:text-3xl font-bold uppercase text-white mb-2 leading-none tracking-tight">
                        {title}
                    </h3>
                    <p className="font-mono text-xs text-gray-400 leading-relaxed max-w-md">
                        {desc}
                    </p>
                </div>
            </div>
        </Spotlight>
    );
}

export default function Methodology() {
    return (
        <section id="system" className="bg-black text-white py-12 md:py-20 relative z-20">
            <div className="px-4 mb-8 md:mb-12 max-w-[90rem] mx-auto">
                <RevealText>
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-1.5 h-1.5 bg-[#d9ff00] animate-ping" />
                        <h2 className="text-[#d9ff00] font-mono text-xs uppercase tracking-widest">
                            [ The Protocol ]
                        </h2>
                    </div>
                </RevealText>
                <RevealText delay={100}>
                    <p className="text-2xl md:text-4xl font-bold max-w-4xl leading-tight group/tagline cursor-default">
                        WE OPERATE IN THE <br />
                        <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-b from-gray-500 to-white animate-shadow-drift hover:from-[#d9ff00] hover:to-white transition-all duration-500">
                            SHADOWS.
                        </span>{' '}
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white hover:from-white hover:to-[#d9ff00] transition-all duration-500">
                            YOU TAKE THE STAGE.
                        </span>
                    </p>
                </RevealText>
            </div>

            <div className="max-w-[90rem] mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3 auto-rows-[minmax(160px,auto)]">

                    {/* Item 1: Large */}
                    <ServiceCard
                        className="md:col-span-2 md:row-span-1"
                        number="01 //"
                        title="NEURAL SEARCH MATRIX"
                        desc="We don't match tags. We use high-dimensional vector embeddings to align your startup's DNA with an investor's unstated thesis."
                        gradient="radial-gradient(circle at top right, rgba(100,50,255,0.4), transparent 70%)"
                    />

                    {/* Item 2: Small */}
                    <ServiceCard
                        className="md:col-span-1 md:row-span-1"
                        number="02 //"
                        title="PREDICTIVE SCORING"
                        desc="Our model runs your metrics against 10M+ data points to predict funding probability with 94% accuracy."
                        gradient="linear-gradient(to bottom left, rgba(255,100,0,0.2), transparent)"
                    />

                    {/* Item 3: Small */}
                    <ServiceCard
                        className="md:col-span-1 md:row-span-1"
                        number="03 //"
                        title="AUTONOMOUS AGENTS"
                        desc="Self-deployed AI swarm that handles follow-ups, objection handling, and scheduling 24/7."
                        gradient="linear-gradient(to top right, rgba(0,255,100,0.2), transparent)"
                    />

                    {/* Item 4: Large */}
                    <ServiceCard
                        className="md:col-span-2 md:row-span-1"
                        number="04 //"
                        title="GENERATIVE PERSUASION"
                        desc="Hyper-personalized outreach generated by LLMs trained on psychological persuasion triggers. Every email feels manually written."
                        gradient="radial-gradient(circle at bottom left, rgba(50,50,50,0.8), transparent 60%)"
                    />

                    {/* Item 5: Full Width */}
                    <ServiceCard
                        className="md:col-span-3 md:row-span-1 min-h-[160px]"
                        number="05 //"
                        title="SENTIMENT FEEDBACK LOOP"
                        desc="Real-time learning. As replies come in, the system analyzes sentiment and adjusts the pitch strategy instantly across the entire campaign to maximize conversion velocity."
                        gradient="linear-gradient(to right, rgba(217, 255, 0, 0.1), transparent, rgba(217, 255, 0, 0.05))"
                    />

                </div>
            </div>
        </section>
    );
}
