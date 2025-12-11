'use client';

import { useState, useEffect } from 'react';
import RevealText from '../animations/RevealText';
import Counter from '../animations/Counter';
import { Radio, Terminal, Hexagon, Cpu, AlertTriangle, Sparkles } from '@/lib/icons';

function LiveMetric({ label, value, suffix = '%' }: { label: string; value: number; suffix?: string }) {
    return (
        <div className="flex justify-between border-b border-[#333] pb-2 font-mono text-sm group hover:bg-[#d9ff00]/5 transition-colors px-2">
            <span className="text-gray-400 group-hover:text-[#d9ff00] transition-colors">{label}</span>
            <span className="text-white tabular-nums group-hover:text-[#d9ff00] transition-colors">
                <Counter end={value} suffix={suffix} duration={1500} />
            </span>
        </div>
    );
}

function SystemLog() {
    const [logs, setLogs] = useState<Array<{ id: number; text: string }>>([
        { id: 0, text: '> Initializing protocol...' },
        { id: 1, text: '> Connecting to secure nodes...' },
    ]);
    const [nextId, setNextId] = useState(2);

    const messages = [
        'Analyzing thesis match...',
        'Scanning portfolio overlap...',
        'Target identified: Series A focus',
        'Filtering by check size > $2M',
        'Dry powder detected',
        'Sentiment analysis: POSITIVE',
        'Email sequence drafted',
        'Optimizing send time...',
        'Encryption keys rotated',
        'Handshake established',
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setLogs((prev) => {
                const newLog = messages[Math.floor(Math.random() * messages.length)];
                const newEntry = { id: nextId, text: `> ${newLog}` };
                setNextId(nextId + 1);
                const newLogs = [...prev, newEntry];
                if (newLogs.length > 6) return newLogs.slice(1);
                return newLogs;
            });
        }, 1200);
        return () => clearInterval(interval);
    }, [nextId]);

    return (
        <div className="font-mono text-xs text-[#d9ff00]/70 h-32 overflow-hidden flex flex-col justify-end bg-black/50 backdrop-blur-sm border border-[#333] p-4 rounded-sm relative">
            <style jsx>{`
                @keyframes slideUpFade {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .log-line {
                    animation: slideUpFade 0.3s ease-out forwards;
                }
            `}</style>
            <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-[#d9ff00] animate-pulse rounded-full" />
            {logs.map((log) => (
                <div key={log.id} className="log-line">
                    {log.text}
                </div>
            ))}
        </div>
    );
}

function TitanTerminal() {
    const [input, setInput] = useState('');
    const [status, setStatus] = useState<'IDLE' | 'ANALYZING' | 'COMPLETE'>('IDLE');
    const [result, setResult] = useState<{
        score: number;
        rewrite: string;
        critique: string;
    } | null>(null);

    const analyzePitch = async () => {
        if (!input.trim()) return;
        setStatus('ANALYZING');
        // Simulation
        setTimeout(() => {
            setResult({
                score: 88,
                rewrite: 'Disrupting $50B logistics inefficiencies with autonomous AI agents.',
                critique: 'Too generic. Needs more aggression.',
            });
            setStatus('COMPLETE');
        }, 2000);
    };

    return (
        <div className="relative w-full max-w-lg mx-auto bg-[#0a0a0a] border border-[#333] rounded-lg overflow-hidden shadow-[0_0_50px_-10px_rgba(217,255,0,0.15)] font-mono text-sm group">
            <div className="absolute inset-0 pointer-events-none bg-white/5 opacity-[0.03] animate-flicker z-50" />
            <div className="bg-[#111] px-4 py-2 border-b border-[#333] flex justify-between items-center relative z-20">
                <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-[#d9ff00]" />
                    <span className="text-gray-400 text-xs tracking-widest group-hover:text-white transition-colors">
                        TITAN_PROTOCOL_V1.0
                    </span>
                </div>
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#d9ff00] animate-pulse" />
                </div>
            </div>
            <div className="p-6 min-h-[300px] flex flex-col relative z-10">
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.3)_50%)] bg-[size:100%_4px] pointer-events-none opacity-30" />
                {status === 'IDLE' && (
                    <div className="animate-slide-up">
                        <p className="text-[#d9ff00] mb-4">&gt;&gt; ENTER_PITCH_SEQUENCE_</p>
                        <textarea
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="e.g. We are building an AI agent for supply chain logistics..."
                            className="w-full h-32 bg-[#050505] border border-[#333] p-3 text-white focus:border-[#d9ff00] focus:outline-none resize-none placeholder:text-gray-700 font-mono text-xs leading-relaxed"
                        />
                        <button
                            onClick={analyzePitch}
                            className="mt-4 w-full bg-[#d9ff00] hover:bg-white text-black font-bold py-3 uppercase tracking-widest transition-colors flex items-center justify-center gap-2 text-xs relative overflow-hidden group/btn"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <Cpu className="w-4 h-4" /> Analyze Viability
                            </span>
                            <div className="absolute inset-0 bg-white transform translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 z-0" />
                        </button>
                    </div>
                )}
                {status === 'ANALYZING' && (
                    <div className="flex-1 flex flex-col items-center justify-center space-y-4 animate-pulse">
                        <Hexagon className="w-12 h-12 text-[#d9ff00] animate-spin-slow" />
                        <p className="text-[#d9ff00] text-xs tracking-widest">ACCESSING_PROPRIETARY_DATABASE...</p>
                        <div className="w-48 h-1 bg-[#333] rounded-full overflow-hidden">
                            <div className="h-full bg-[#d9ff00] w-1/2 animate-[marquee_1s_linear_infinite]" />
                        </div>
                    </div>
                )}
                {status === 'COMPLETE' && result && (
                    <div className="animate-slide-up space-y-4">
                        <div className="flex items-end justify-between border-b border-[#333] pb-2">
                            <span className="text-gray-500 text-xs">FUNDABILITY_SCORE</span>
                            <span className={`text-3xl font-bold ${result.score > 70 ? 'text-[#d9ff00]' : 'text-red-500'}`}>
                                <Counter end={result.score} duration={1000} />
                                /100
                            </span>
                        </div>
                        <div>
                            <p className="text-gray-500 text-xs mb-1">CRITIQUE_VECTOR</p>
                            <p className="text-red-400 text-xs flex gap-2 items-start">
                                <AlertTriangle className="w-3 h-3 mt-0.5 shrink-0" />
                                {result.critique}
                            </p>
                        </div>
                        <div className="bg-[#d9ff00]/5 border border-[#d9ff00]/20 p-4 relative group/box">
                            <div className="absolute inset-0 bg-[#d9ff00]/5 opacity-0 group-hover/box:opacity-100 transition-opacity" />
                            <p className="text-gray-500 text-xs mb-2 flex items-center gap-2">
                                <Sparkles className="w-3 h-3 text-[#d9ff00]" />
                                OPTIMIZED_OUTREACH_HOOK
                            </p>
                            <p className="text-white italic text-sm relative z-10">&quot;{result.rewrite}&quot;</p>
                        </div>
                        <button
                            onClick={() => {
                                setStatus('IDLE');
                                setInput('');
                            }}
                            className="text-[#d9ff00] text-xs hover:text-white underline decoration-dashed underline-offset-4"
                        >
                            &gt; RESET_TERMINAL
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default function Visualizer() {
    return (
        <section
            id="targets"
            className="bg-[#050505] text-[#d9ff00] py-32 overflow-hidden relative border-t border-[#222]"
        >
            <div className="absolute inset-0 bg-[linear-gradient(rgba(217,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(217,255,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                <div>
                    <RevealText>
                        <div className="flex items-center gap-2 mb-8 border border-[#d9ff00]/30 bg-[#d9ff00]/5 px-3 py-1 w-fit rounded-full shadow-[0_0_15px_rgba(217,255,0,0.2)]">
                            <Radio className="w-4 h-4 animate-pulse" />
                            <span className="font-mono text-xs font-bold tracking-wider">LIVE_DATA_FEED</span>
                        </div>
                    </RevealText>
                    <RevealText delay={100}>
                        <h3 className="text-6xl font-black uppercase mb-8 leading-[0.9]">
                            QUANTITATIVE <br /> PRECISION
                        </h3>
                    </RevealText>
                    <RevealText delay={200}>
                        <p className="text-gray-400 font-mono mb-8 max-w-md">
                            We track open rates, reply sentiment, and bounce velocity in real-time. If a pitch isn&apos;t
                            landing, we rewrite it.
                        </p>
                    </RevealText>
                    <div className="space-y-4 mb-8 bg-[#111] p-6 rounded-lg border border-[#333] shadow-2xl max-w-md">
                        <RevealText delay={300}>
                            <LiveMetric label="DELIVERABILITY" value={99.8} />
                        </RevealText>
                        <RevealText delay={400}>
                            <LiveMetric label="REPLY_RATE" value={6.8} />
                        </RevealText>
                        <RevealText delay={500}>
                            <LiveMetric label="DOMAIN_HEALTH" value={98.2} />
                        </RevealText>
                    </div>
                    <RevealText delay={600}>
                        <div className="max-w-md">
                            <SystemLog />
                        </div>
                    </RevealText>
                </div>
                <RevealText delay={300} className="relative">
                    <TitanTerminal />
                    <div className="absolute -top-10 -right-10 font-mono text-xs text-[#d9ff00]/30 rotate-90 hidden md:block">
                        SYS_ID: VVR_HEX_01
                    </div>
                    <div className="absolute -bottom-10 -left-10 font-mono text-xs text-[#d9ff00]/30 -rotate-90 hidden md:block">
                        LATENCY: 4ms
                    </div>
                </RevealText>
            </div>
        </section>
    );
}
