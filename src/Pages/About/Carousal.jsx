import { useEffect, useState } from "react";

const images = [
    "https://picsum.photos/id/1018/1000/600/",
    "https://picsum.photos/id/1015/1000/600/",
    "https://picsum.photos/id/1019/1000/600/",
    "https://picsum.photos/id/1020/1000/600/",
    "https://picsum.photos/id/1024/1000/600/",
    "https://picsum.photos/id/1027/1000/600/",
];

export default function ResponsiveSlider() {
    const [current, setCurrent] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(1);

    // Detect screen size for items per view
    useEffect(() => {
        const updateItems = () => {
            if (window.innerWidth >= 1024) {
                setItemsPerView(4); // large
            } else if (window.innerWidth >= 768) {
                setItemsPerView(3); // medium
            } else {
                setItemsPerView(1); // mobile
            }
        };

        updateItems();
        window.addEventListener("resize", updateItems);
        return () => window.removeEventListener("resize", updateItems);
    }, []);

    // Autoplay effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) =>
                prev === images.length - itemsPerView ? 0 : prev + 1
            );
        }, 3000); // 3 sec autoplay
        return () => clearInterval(interval);
    }, [itemsPerView]);

    const prevSlide = () => {
        setCurrent((prev) =>
            prev === 0 ? images.length - itemsPerView : prev - 1
        );
    };

    const nextSlide = () => {
        setCurrent((prev) =>
            prev === images.length - itemsPerView ? 0 : prev + 1
        );
    };

    return (
        <div className="relative z-10 w-full mx-auto overflow-hidden rounded-2xl shadow-lg">
            {/* Slider Images */}
            <div
                className="flex transition-transform duration-500"
                style={{
                    transform: `translateX(-${(current * 100) / itemsPerView}%)`,
                    width: `${(images.length * 100) / itemsPerView}%`,
                }}
            >
                {images.map((src, index) => (
                    <div
                        key={index}
                        className="w-full h-full md:w-1/3 lg:w-1/4 flex-shrink-0 px-2"
                    >
                        <img
                            src={src}
                            alt={`Slide ${index}`}
                            className="w-full h-64 object-cover object-center rounded-xl"
                        />
                    </div>
                ))}
            </div>

            {/* Dots */}
            <div className="absolute md:hidden bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {Array.from({ length: images.length - itemsPerView + 1 }).map(
                    (_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`w-3 h-3 rounded-full ${current === index ? "bg-white" : "bg-gray-400"
                                }`}
                        />
                    )
                )}
            </div>
        </div>
    );
}
