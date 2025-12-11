export default function NoiseOverlay() {
    return (
        <div className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.06] mix-blend-overlay">
            <svg className="w-full h-full">
                <filter id="noise">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.8"
                        numOctaves={4}
                        stitchTiles="stitch"
                    />
                </filter>
                <rect width="100%" height="100%" filter="url(#noise)" />
            </svg>
        </div>
    );
}
