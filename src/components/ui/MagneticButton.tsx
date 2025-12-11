'use client';

import { useRef, useState, ReactNode, CSSProperties, MouseEvent } from 'react';

interface MagneticButtonProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
    style?: CSSProperties;
}

export default function MagneticButton({ children, className, onClick, style }: MagneticButtonProps) {
    const btnRef = useRef<HTMLButtonElement>(null);
    const [pos, setPos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
        if (!btnRef.current) return;
        const { clientX, clientY } = e;
        const { left, top, width, height } = btnRef.current.getBoundingClientRect();
        const x = (clientX - (left + width / 2)) * 0.35;
        const y = (clientY - (top + height / 2)) * 0.35;
        setPos({ x, y });
    };

    const handleMouseLeave = () => setPos({ x: 0, y: 0 });

    return (
        <button
            ref={btnRef}
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                ...style,
                transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`
            }}
            className={`transition-transform duration-200 ease-out will-change-transform ${className}`}
        >
            {children}
        </button>
    );
}
