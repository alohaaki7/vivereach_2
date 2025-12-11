'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
            }
        };

        window.addEventListener('mousemove', moveCursor);
        return () => window.removeEventListener('mousemove', moveCursor);
    }, []);

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 w-4 h-4 bg-[#d9ff00] rounded-full mix-blend-difference pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out hidden md:block shadow-[0_0_15px_#d9ff00]"
        />
    );
}
