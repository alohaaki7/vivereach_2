'use client';

import { useState, useEffect, useRef } from 'react';
import RevealText from '../animations/RevealText';

interface TeamMember {
    codename: string;
    name: string;
    role: string;
    deals: number;
    rate: number;
    years: number;
    avatar: string;
    linkedIn: string;
}

export default function TeamSection() {
    const [isRevealed, setIsRevealed] = useState(false);
    const [scanProgress, setScanProgress] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);

    // Handle keyboard events (desktop)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.code === 'Space') {
                e.preventDefault();
                if (!isRevealed) {
                    setIsRevealed(true);
                }
            }
        };

        const handleKeyUp = (e: KeyboardEvent) => {
            if (e.code === 'Space') {
                e.preventDefault();
                setIsRevealed(false);
                setScanProgress(0);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, [isRevealed]);

    // Handle touch events (mobile)
    const handleTouchStart = () => {
        setIsRevealed(true);
    };

    const handleTouchEnd = () => {
        setIsRevealed(false);
        setScanProgress(0);
    };

    useEffect(() => {
        if (isRevealed && scanProgress < 100) {
            const interval = setInterval(() => {
                setScanProgress((prev) => Math.min(prev + 2, 100));
            }, 20);
            return () => clearInterval(interval);
        }
    }, [isRevealed, scanProgress]);

    const team: TeamMember[] = [
        {
            codename: 'OPERATOR_01',
            name: 'Akmyrat Akatov',
            role: 'LEAD ARCHITECT',
            deals: 127,
            rate: 94,
            years: 8,
            avatar: '◢◣',
            linkedIn: 'https://linkedin.com/in/akmyrat-a-60129b17b',
        },
        {
            codename: 'OPERATOR_02',
            name: 'Ukyp',
            role: 'STRATEGIC OPS',
            deals: 85,
            rate: 96,
            years: 5,
            avatar: '◈◇',
            linkedIn: '#',
        },
    ];

    return (
        <section
            ref={sectionRef}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="bg-black text-white py-32 relative overflow-hidden border-t border-[#222]"
        >
            {/* Background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(217,255,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(217,255,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

            {/* Scan line effect */}
            {isRevealed && (
                <div
                    className="absolute inset-0 pointer-events-none z-20"
                    style={{
                        background: `linear-gradient(to bottom, transparent ${scanProgress}%, rgba(0,255,0,0.1) ${scanProgress}%, rgba(0,255,0,0.2) ${scanProgress + 2}%, transparent ${scanProgress + 4}%)`,
                        transition: 'none',
                    }}
                />
            )}

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <RevealText>
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <div className="w-1.5 h-1.5 bg-[#d9ff00] animate-ping" />
                            <h2 className="text-[#d9ff00] font-mono text-sm uppercase tracking-widest">
                                [ CLASSIFIED PERSONNEL ]
                            </h2>
                        </div>
                        <h3 className="text-5xl md:text-7xl font-black uppercase mb-6">THE OPERATORS</h3>

                        {/* Interaction instruction */}
                        <div className="flex flex-col md:flex-row items-center justify-center gap-3 font-mono text-sm">
                            <div className="flex items-center gap-3">
                                <div
                                    className={`px-4 py-2 border-2 ${isRevealed
                                        ? 'border-[#00ff00] bg-[#00ff00]/10'
                                        : 'border-[#d9ff00] bg-[#d9ff00]/5'
                                        } transition-all duration-300 hidden md:block`}
                                >
                                    <span className={isRevealed ? 'text-[#00ff00]' : 'text-[#d9ff00]'}>SPACEBAR</span>
                                </div>
                                <div
                                    className={`px-4 py-2 border-2 ${isRevealed
                                        ? 'border-[#00ff00] bg-[#00ff00]/10'
                                        : 'border-[#d9ff00] bg-[#d9ff00]/5'
                                        } transition-all duration-300 md:hidden`}
                                >
                                    <span className={isRevealed ? 'text-[#00ff00]' : 'text-[#d9ff00]'}>
                                        TOUCH & HOLD
                                    </span>
                                </div>
                                <span className="text-gray-500">
                                    {isRevealed ? '[ SCANNING... ]' : '[ HOLD TO REVEAL ]'}
                                </span>
                            </div>
                        </div>
                    </div>
                </RevealText>

                {/* Team Grid */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                    {team.map((member, index) => (
                        <RevealText key={member.codename} delay={index * 100}>
                            <div className="relative group w-72">
                                {/* Card */}
                                <div
                                    className={`relative bg-[#0a0a0a] border-2 p-6 transition-all duration-500 h-full ${isRevealed
                                        ? 'border-[#00ff00] shadow-[0_0_30px_rgba(0,255,0,0.3)]'
                                        : 'border-[#333] hover:border-[#d9ff00]'
                                        }`}
                                >
                                    {/* Glitch overlay when not revealed */}
                                    {!isRevealed && (
                                        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-10">
                                            <div className="text-center">
                                                <div className="text-3xl md:text-4xl mb-2 opacity-20">█</div>
                                                <div className="font-mono text-[10px] text-gray-600 tracking-widest">
                                                    [REDACTED]
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Revealed content */}
                                    <div
                                        className={`transition-all duration-500 ${isRevealed ? 'opacity-100' : 'opacity-0'
                                            }`}
                                    >
                                        {/* Avatar */}
                                        <div className="flex justify-center mb-3">
                                            <div
                                                className={`w-14 h-14 border-2 flex items-center justify-center text-2xl font-bold transition-colors duration-300 ${isRevealed
                                                    ? 'border-[#00ff00] text-[#00ff00]'
                                                    : 'border-[#333] text-gray-700'
                                                    }`}
                                            >
                                                {member.avatar}
                                            </div>
                                        </div>

                                        {/* Codename */}
                                        <h4
                                            className={`font-mono text-sm font-bold text-center mb-1 transition-colors duration-300 ${isRevealed ? 'text-[#00ff00]' : 'text-gray-700'
                                                }`}
                                        >
                                            {member.codename}
                                        </h4>

                                        {/* Name */}
                                        <p className="font-mono text-xs text-center text-gray-500 mb-1">{member.name}</p>

                                        {/* Role */}
                                        <p className="font-mono text-[10px] text-center text-gray-500 uppercase tracking-wider">
                                            {member.role}
                                        </p>

                                        {/* Stats */}
                                        <div className="space-y-1.5 border-t border-[#222] pt-3 mb-3 mt-3">
                                            <div className="flex justify-between font-mono text-[10px]">
                                                <span className="text-gray-600">DEALS</span>
                                                <span className={isRevealed ? 'text-[#00ff00]' : 'text-gray-700'}>
                                                    {member.deals}
                                                </span>
                                            </div>
                                            <div className="flex justify-between font-mono text-[10px]">
                                                <span className="text-gray-600">RATE</span>
                                                <span className={isRevealed ? 'text-[#00ff00]' : 'text-gray-700'}>
                                                    {member.rate}%
                                                </span>
                                            </div>
                                            <div className="flex justify-between font-mono text-[10px]">
                                                <span className="text-gray-600">YEARS</span>
                                                <span className={isRevealed ? 'text-[#00ff00]' : 'text-gray-700'}>
                                                    {member.years}
                                                </span>
                                            </div>
                                        </div>

                                        {/* LinkedIn Link */}
                                        <a
                                            href={member.linkedIn}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`flex items-center justify-center gap-2 py-1.5 border transition-all duration-300 font-mono text-[10px] uppercase ${isRevealed
                                                ? 'border-[#00ff00] text-[#00ff00] hover:bg-[#00ff00] hover:text-black'
                                                : 'border-[#333] text-gray-700'
                                                }`}
                                        >
                                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                            </svg>
                                            LINKEDIN
                                        </a>
                                    </div>
                                </div>

                                {/* Corner accents */}
                                <div
                                    className={`absolute top-0 left-0 w-2 h-2 border-t border-l transition-colors duration-300 ${isRevealed
                                        ? 'border-[#00ff00]'
                                        : 'border-transparent group-hover:border-[#d9ff00]'
                                        }`}
                                />
                                <div
                                    className={`absolute top-0 right-0 w-2 h-2 border-t border-r transition-colors duration-300 ${isRevealed
                                        ? 'border-[#00ff00]'
                                        : 'border-transparent group-hover:border-[#d9ff00]'
                                        }`}
                                />
                                <div
                                    className={`absolute bottom-0 left-0 w-2 h-2 border-b border-l transition-colors duration-300 ${isRevealed
                                        ? 'border-[#00ff00]'
                                        : 'border-transparent group-hover:border-[#d9ff00]'
                                        }`}
                                />
                                <div
                                    className={`absolute bottom-0 right-0 w-2 h-2 border-b border-r transition-colors duration-300 ${isRevealed
                                        ? 'border-[#00ff00]'
                                        : 'border-transparent group-hover:border-[#d9ff00]'
                                        }`}
                                />
                            </div>
                        </RevealText>
                    ))}
                </div>

                {/* Bottom text */}
                <RevealText delay={400}>
                    <div className="text-center mt-16">
                        <p className="font-mono text-sm text-gray-600 uppercase tracking-wider">
                            {isRevealed ? '[ CLEARANCE GRANTED - LEVEL 5 ]' : '[ SECURITY CLEARANCE REQUIRED ]'}
                        </p>
                    </div>
                </RevealText>
            </div>
        </section>
    );
}
