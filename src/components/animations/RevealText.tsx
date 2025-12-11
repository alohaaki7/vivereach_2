'use client';

import { useRef, useState, useEffect, ReactNode } from 'react';

interface RevealTextProps {
    children: ReactNode;
    delay?: number;
    className?: string;
}

export default function RevealText({ children, delay = 0, className = '' }: RevealTextProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ${className}`}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 40px, 0)',
                transitionDelay: `${delay}ms`,
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
            }}
        >
            {children}
        </div>
    );
}
