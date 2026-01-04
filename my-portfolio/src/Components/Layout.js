import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="min-h-screen bg-iron-dark font-body text-gray-300 relative overflow-hidden selection:bg-iron-arc selection:text-iron-dark">
            {/* Dynamic Background Grid */}
            <div
                className="fixed inset-0 z-0 pointer-events-none opacity-20"
                style={{
                    backgroundImage: `
            linear-gradient(to right, #590d0d 1px, transparent 1px),
            linear-gradient(to bottom, #590d0d 1px, transparent 1px)
          `,
                    backgroundSize: '40px 40px',
                    transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
                }}
            />

            {/* Vignette */}
            <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />

            {/* Main Content */}
            <div className="relative z-10 flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow container mx-auto px-4 py-8">
                    {children}
                </main>

                {/* Footer / HUD Status */}
                <footer className="border-t border-iron-red/30 bg-black/50 backdrop-blur-sm py-4">
                    <div className="container mx-auto px-4 flex justify-between items-center text-xs font-hud text-iron-gold/70">
                        <span>SYS.STATUS: ONLINE</span>
                        <span>PWR.LVL: 100%</span>
                        <span>SECURE CONNECTION ESTABLISHED</span>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Layout;
