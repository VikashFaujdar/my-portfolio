import { useEffect, useState } from "react";
import cursor from '../assets/cursor.svg'

export default function AnimatedCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const moveHandler = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", moveHandler);
        return () => window.removeEventListener("mousemove", moveHandler);
    }, []);

    return (
        <div
            className="fixed hidden md:block top-0 left-0 pointer-events-none z-50 -translate-y-3"
            style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
            }}
        >
            <img src={cursor} alt="cursor" className="size-16"/>
        </div>
    );
}
