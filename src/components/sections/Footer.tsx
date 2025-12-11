import RevealText from '../animations/RevealText';
import MagneticButton from '../ui/MagneticButton';

interface FooterProps {
    onOpenModal?: () => void;
}

export default function Footer({ onOpenModal }: FooterProps) {
    return (
        <footer
            id="access"
            className="bg-[#d9ff00] text-black pt-20 pb-10 px-6 relative overflow-hidden"
        >
            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />
            <div className="max-w-[90rem] mx-auto relative z-10">
                <div className="grid grid-cols-2 gap-6 md:gap-10 mb-20">
                    <div>
                        <RevealText>
                            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-none mb-8">
                                Start <br /> The <br /> Hunt
                            </h2>
                        </RevealText>
                    </div>
                    <div className="flex flex-col justify-end items-end pl-8 md:pl-16 lg:pl-24 pb-4 md:pb-6 lg:pb-8">
                        <RevealText delay={200}>
                            <p className="font-mono font-bold text-xs sm:text-sm md:text-xl mb-4 md:mb-8 max-w-xs text-right">
                                WE CAN ONLY WORK WITH 4 CLIENTS SIMULTANEOUSLY.
                            </p>
                        </RevealText>
                        <MagneticButton
                            onClick={onOpenModal}
                            className="bg-black text-white px-4 py-2 sm:px-6 sm:py-3 md:px-12 md:py-6 text-xs sm:text-sm md:text-lg lg:text-xl font-bold font-mono uppercase hover:scale-105 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] transition-all duration-300"
                        >
                            Request_Access_//
                        </MagneticButton>
                    </div>
                </div>
                <div className="border-t-4 border-black pt-8 flex flex-col md:flex-row justify-between items-center font-mono text-xs font-bold uppercase">
                    <div className="flex gap-4">
                        <span className="hover:underline cursor-pointer">TWITTER / X</span>
                        <span className="hover:underline cursor-pointer">LINKEDIN</span>
                    </div>
                    <div className="mt-4 md:mt-0">VIVEREACH SYSTEMS © 2025</div>
                </div>
            </div>
        </footer>
    );
}
