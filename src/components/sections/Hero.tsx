import RevealText from '../animations/RevealText';
import Counter from '../animations/Counter';
import { ArrowUpRight } from '@/lib/icons';

export default function Hero() {
    return (
        <section className="relative min-h-screen bg-black text-white flex flex-col justify-center px-4 overflow-hidden border-b border-[#333]">
            {/* Grid Background */}
            <div className="absolute inset-0 perspective-[500px] overflow-hidden pointer-events-none">
                <div className="absolute inset-[-100%] w-[300%] h-[300%] bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:4rem_4rem] [transform:rotateX(45deg)_translateZ(0)] animate-grid-flow opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
            </div>

            <div className="relative z-10 max-w-[90rem] mx-auto w-full pt-20">
                <RevealText delay={200}>
                    <div className="mb-4 font-mono text-[#d9ff00] flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#d9ff00] animate-pulse shadow-[0_0_10px_#d9ff00]" />
                        <span className="tracking-[0.2em] text-xs font-bold">
                            SECURE_CONNECTION_ESTABLISHED
                        </span>
                    </div>
                </RevealText>

                <h1 className="text-[clamp(3rem,12vw,7.5rem)] leading-[0.85] font-black tracking-tighter uppercase mb-8">
                    <div className="flex flex-col">
                        <div className="overflow-hidden">
                            <span className="block animate-slide-up hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d9ff00] hover:via-white hover:to-[#d9ff00] transition-all duration-500 cursor-default hover:scale-105 inline-block">
                                CAPITAL
                            </span>
                        </div>
                        <div className="overflow-hidden flex items-center gap-2 md:gap-4 lg:gap-12">
                            <ArrowUpRight className="w-[clamp(2rem,8vw,6rem)] h-[clamp(2rem,8vw,6rem)] text-[#d9ff00] animate-launch-trajectory hover:rotate-45 transition-transform duration-300" />
                            <span className="block animate-slide-up animation-delay-100 cursor-default hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d9ff00] hover:via-white hover:to-[#d9ff00] transition-all duration-500 hover:scale-105 inline-block">
                                SECURED
                            </span>
                        </div>
                    </div>
                </h1>

                <div className="flex flex-row justify-between items-end border-t border-[#333] pt-8 mt-12 gap-4">
                    <RevealText delay={400} className="flex-1">
                        <p className="font-mono text-sm md:text-lg text-gray-400 leading-relaxed uppercase group/mission">
                            <span className="text-[#d9ff00] group-hover/mission:text-white transition-colors duration-300">
                // MISSION:
                            </span>{' '}
                            We access our proprietary database of{' '}
                            <span className="hover:text-[#d9ff00] transition-colors duration-200 cursor-default">
                                50,000+ VCs
                            </span>{' '}
                            to find your perfect match. The outreach is{' '}
                            <span className="hover:text-[#d9ff00] transition-colors duration-200 cursor-default">
                                hand-crafted
                            </span>
                            . The meetings are{' '}
                            <span className="hover:text-[#d9ff00] transition-colors duration-200 cursor-default">
                                real
                            </span>
                            . The mechanism is{' '}
                            <span className="text-white bg-gray-800 px-1 hover:bg-[#d9ff00] hover:text-black transition-all duration-300 cursor-default">
                                INVISIBLE
                            </span>
                            .
                        </p>
                    </RevealText>

                    <div className="flex-shrink-0">
                        <RevealText delay={600}>
                            <div className="flex items-center gap-2 md:gap-4 text-4xl md:text-6xl lg:text-8xl font-black group cursor-default">
                                <span className="text-[#d9ff00] group-hover:text-white transition-all duration-300 group-hover:scale-110 inline-block group-hover:drop-shadow-[0_0_20px_rgba(217,255,0,0.8)]">
                                    <Counter end={45} suffix="+" />
                                </span>
                                <span className="text-sm md:text-lg font-mono text-gray-500 max-w-[80px] md:max-w-[100px] leading-tight block group-hover:text-[#d9ff00] transition-colors duration-300">
                                    MEETINGS BOOKED Q3
                                </span>
                            </div>
                        </RevealText>
                    </div>
                </div>
            </div>
        </section>
    );
}
