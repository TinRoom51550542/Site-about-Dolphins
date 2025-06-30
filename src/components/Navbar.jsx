import React, { useState, useEffect, useRef } from 'react';
import '../styles/style.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [showPulldown, setShowPulldown] = useState(false);
    const pulldownRef = useRef();
    const listAboutRef = useRef();


    useEffect(() => {
        const togglePulldown = (e) => {
        e.preventDefault();
        setShowPulldown(prev => !prev);
    };

    const handleClickOutside = (e) => {
        if (
            pulldownRef.current &&
            !pulldownRef.current.contains(e.target) &&
            e.target !== listAboutRef.current
        ) {
        setShowPulldown(false);
      }
    };

    const handlePulldownClick = (e) => {
        if (e.target.tagName === 'A') {
            setShowPulldown(false);
        }
    };

    const listAboutElem = listAboutRef.current;
    if (listAboutElem) {
        listAboutElem.addEventListener('click', togglePulldown);
    }
    if (pulldownRef.current) {
        pulldownRef.current.addEventListener('click', handlePulldownClick);
    }

    window.addEventListener('click', handleClickOutside);
    const pulldownElem = pulldownRef.current;
    return () => {
        if (listAboutElem) {
            listAboutElem.removeEventListener('click', togglePulldown);
        } 
        if (pulldownElem) {
            pulldownElem.removeEventListener('click', handlePulldownClick);
        }
        window.removeEventListener('click', handleClickOutside);
    };
  }, []);

    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Главная</Link></li>
                <li><Link to="/species">Виды</Link></li>
                <li>
                    <button id="list-about" ref={listAboutRef} className="link-like-button" type="button">О дельфинах</button>
                    <div
                      id="pulldown"
                      ref={pulldownRef}
                      className={`pulldown_menu ${showPulldown ? 'show' : ''}`}
                    >
                        <Link to="/evolution" className="pulldown_item">Эволюция и происхождение</Link>
                        <Link to="/physiology" className="pulldown_item">Физиология</Link>
                        <Link to="/social-life" className="pulldown_item">Социальная жизнь</Link>
                    </div>
                </li>
                <li><Link to="/facts">Интересные факты</Link></li>
                <li><Link to="/help">Как помочь дельфинам?</Link></li>
            </ul>
        </nav>
    );
}
