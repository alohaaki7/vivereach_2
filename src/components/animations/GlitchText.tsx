'use client';

import { useState, useEffect } from 'react';

interface GlitchTextProps {
    text: string;
    className?: string;
    trigger?: boolean;
}

export default function GlitchText({ text, className = '', trigger = false }: GlitchTextProps) {
    const [displayText, setDisplayText] = useState(text);
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%&*';

    useEffect(() => {
        if (!trigger) {
            setDisplayText(text);
            return;
        }
        let iterations = 0;
        const interval = setInterval(() => {
            setDisplayText(
                text
                    .split('')
                    .map((letter, index) => {
                        if (index < iterations) return text[index];
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join('')
            );
            if (iterations >= text.length) clearInterval(interval);
            iterations += 1 / 3;
        }, 30);
        return () => clearInterval(interval);
    }, [trigger, text, chars]);

    return <span className={`inline-block ${className}`}>{displayText}</span>;
}
