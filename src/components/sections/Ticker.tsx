'use client';

export default function Ticker() {
    const tickerContent = (
        <>
            {[...Array(5)].map((_, i) => (
                <span
                    key={i}
                    className="inline-flex items-center gap-8 text-black font-black text-2xl sm:text-3xl md:text-4xl uppercase italic tracking-tighter"
                >
                    RAISE CAPITAL QUIETLY{' '}
                    <span className="w-4 h-4 bg-black rounded-full" />
                    NO ALIASES{' '}
                    <span className="w-4 h-4 bg-black rounded-full" />
                    PURE ORGANIC TRAFFIC{' '}
                    <span className="w-4 h-4 bg-black rounded-full" />
                </span>
            ))}
        </>
    );

    return (
        <div className="bg-[#d9ff00] py-4 overflow-hidden border-y-4 border-black rotate-1 scale-105 z-20 relative shadow-[0_0_30px_rgba(217,255,0,0.3)]">
            <style jsx>{`
                @keyframes marquee {
                    0% {
                        transform: translate3d(0, 0, 0);
                    }
                    100% {
                        transform: translate3d(-50%, 0, 0);
                    }
                }
                .ticker-animate {
                    animation: marquee 20s linear infinite;
                }
            `}</style>
            <div className="flex gap-8 whitespace-nowrap ticker-animate">
                {tickerContent}
                {tickerContent}
            </div>
        </div>
    );
}
