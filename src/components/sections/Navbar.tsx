'use client';

import { useState, useEffect } from 'react';
import MagneticButton from '../ui/MagneticButton';
import Image from 'next/image';

interface NavbarProps {
    onOpenModal?: () => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false); // Close menu after navigation
        }
    };

    const navItems = [
        { label: '[ SYSTEM ]', id: 'system' },
        { label: '[ TARGETS ]', id: 'targets' },
        { label: '[ ACCESS ]', id: 'access' },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 w-full z-50 flex justify-between items-center px-4 md:px-6 py-4 md:py-6 transition-all duration-500 ${scrolled
                    ? 'bg-black/80 backdrop-blur-lg border-b border-[#333] py-3 md:py-4'
                    : 'bg-black/50 backdrop-blur-sm py-4 md:py-6'
                    }`}
            >
                <div
                    className="flex items-center gap-2 text-[#d9ff00] cursor-pointer group"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <Image
                        src="/logo.png"
                        alt="ViveReach Logo"
                        width={36}
                        height={36}
                        className="w-7 h-7 md:w-9 md:h-9 group-hover:animate-[spin_3s_linear_infinite]"
                    />
                    <span className="font-mono text-lg md:text-xl font-bold tracking-tighter">
                        VIVEREACH
                    </span>
                </div>

                {/* Desktop Navigation */}
                <div
                    className={`hidden md:flex gap-8 font-mono text-sm tracking-widest ${scrolled ? 'text-gray-400' : 'text-[#d9ff00]'
                        }`}
                >
                    {navItems.map((item) => (
                        <button
                            key={item.label}
                            onClick={() => scrollToSection(item.id)}
                            className="hover:text-white transition-colors uppercase relative group overflow-hidden"
                        >
                            {item.label}
                            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#d9ff00] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                        </button>
                    ))}
                </div>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden flex flex-col gap-1.5 w-6 h-6 justify-center items-center z-50"
                    aria-label="Toggle menu"
                >
                    <span className={`w-6 h-0.5 bg-[#d9ff00] transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`w-6 h-0.5 bg-[#d9ff00] transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                    <span className={`w-6 h-0.5 bg-[#d9ff00] transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>

                {/* Desktop CTA */}
                {/* Trigger Deployment Update */}
                <div className="hidden md:block">
                    <MagneticButton
                        onClick={onOpenModal}
                        className="bg-[#d9ff00] text-black font-bold px-4 py-2 md:px-6 md:py-2 font-mono text-xs md:text-sm uppercase hover:bg-white transition-colors"
                    >
                        Initiate_//
                    </MagneticButton>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-black/95 backdrop-blur-lg z-40 md:hidden transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setMobileMenuOpen(false)}
            >
                <div className="flex flex-col items-center justify-center h-full gap-8 font-mono">
                    {navItems.map((item, index) => (
                        <button
                            key={item.label}
                            onClick={() => scrollToSection(item.id)}
                            className={`text-[#d9ff00] text-2xl uppercase tracking-widest hover:text-white transition-all duration-300 ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                                }`}
                            style={{ transitionDelay: mobileMenuOpen ? `${index * 100}ms` : '0ms' }}
                        >
                            {item.label}
                        </button>
                    ))}
                    <MagneticButton
                        onClick={() => {
                            setMobileMenuOpen(false);
                            onOpenModal?.();
                        }}
                        className={`bg-[#d9ff00] text-black font-bold px-8 py-4 font-mono text-lg uppercase hover:bg-white transition-all duration-300 mt-8 ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                            }`}
                        style={{ transitionDelay: mobileMenuOpen ? '300ms' : '0ms' }}
                    >
                        Initiate_//
                    </MagneticButton>
                </div>
            </div>
        </>
    );
}
