import React, { useState, useRef, useEffect } from 'react';
import '../styles/style.css';

export default function ToggleDescription({ children }) {
    const [visible, setVisible] = useState(false);
    const buttonRef = useRef(null);

    useEffect(() => {
        const button = buttonRef.current;
        if (!button) return;

        const handleClick = () => setVisible(v => !v);

        button.addEventListener('click', handleClick);
        return () => {
        button.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <div className="description-toggle">
        <button ref={buttonRef} className="toggle-button">
            {visible ? 'Скрыть описание' : 'Показать описание'}
        </button>
        {visible && <div className="description-content">{children}</div>}
        </div>
    );
}
