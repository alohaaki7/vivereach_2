'use client';

import { useState, useEffect, useRef } from 'react';

interface CounterProps {
    end: number;
    suffix?: string;
    duration?: number;
}

export default function Counter({ end, suffix = '', duration = 2000 }: CounterProps) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return;
        let startTime: number;
        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = (currentTime - startTime) / duration;
            if (progress < 1) {
                setCount(Math.min(end, progress * end));
                requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };
        requestAnimationFrame(animate);
    }, [isVisible, end, duration]);

    return (
        <span ref={ref} className="tabular-nums">
            {count % 1 !== 0 ? count.toFixed(1) : Math.floor(count)}
            {suffix}
        </span>
    );
}
