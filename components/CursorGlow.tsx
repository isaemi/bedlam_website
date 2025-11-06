
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (ev: MouseEvent) => {
            setMousePosition({ x: ev.clientX, y: ev.clientY });
        };
        window.addEventListener('mousemove', updateMousePosition);
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);
    return mousePosition;
};

const CursorGlow = () => {
    const { x, y } = useMousePosition();

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
            style={{
                width: 40,
                height: 40,
                background: 'radial-gradient(circle, rgba(0, 255, 255, 0.3) 0%, rgba(0, 255, 255, 0) 60%)',
                translateX: '-50%',
                translateY: '-50%',
            }}
            animate={{ x, y }}
            transition={{ type: 'spring', stiffness: 500, damping: 30, restDelta: 0.001 }}
        />
    );
};

export default CursorGlow;
