import React, { useState, useEffect, useRef } from 'react';
import '../styles/style.css';
import dolphin from '../images/dolphin.jpg';
import dolphinPlaying from '../images/dolphin-playing.jpg';
import dolphinsWithFlower from '../images/dolphins-with-flower.jpg';
import dolphinsWithHoops from '../images/dophins-with-hoops.jpg';
import dolphinsPlayingWithBall from '../images/dophins-playing-with-ball.jpeg';
import striped from '../images/полосатый.jpg';
import wideMouth from '../images/ширикорылый.jpg';

const images = [
  dolphin,
  dolphinPlaying,
  dolphinsWithFlower,
  dolphinsWithHoops,
  dolphinsPlayingWithBall,
  striped,
  wideMouth
];

export default function Gallery() {
    const [position, setPosition] = useState(0);
    const itemWidth = 800;
    const maxPosition = -(images.length - 1) * itemWidth;

    const prevButtonRef = useRef(null);
    const nextButtonRef = useRef(null);

    const moveNext = () => {
        if (position > maxPosition) {
            setPosition(prev => prev - itemWidth);
        }
    };

    const movePrev = () => {
        if (position < 0) {
            setPosition(prev => prev + itemWidth);
        }
    };

    useEffect(() => {
        const prevBtn = prevButtonRef.current;
        const nextBtn = nextButtonRef.current;

        prevBtn?.addEventListener("click", movePrev);
        nextBtn?.addEventListener("click", moveNext);

        return () => {
            prevBtn?.removeEventListener("click", movePrev);
            nextBtn?.removeEventListener("click", moveNext);
        };
    }, [position]);

    return (
        <section className="gallery">
            <h2>Фотогалерея</h2>
            <div className="gallery-wrapper">
                <button
                    ref={prevButtonRef}
                    className="arrow prev-button"
                    disabled={position === 0}
                >
                    &lt;
                </button>
                <div className="gallery-container">
                    <div className="gallery-track" style={{ transform: `translateX(${position}px)` }}>
                        {images.map((src, idx) => (
                            <div className="gallery-item" key={idx}>
                                <img src={src} alt={`Дельфин ${idx + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
                <button
                    ref={nextButtonRef}
                    className="arrow next-button"
                    disabled={position <= maxPosition}
                >
                    &gt;
                </button>
            </div>
        </section>
    );
}
