import React from 'react';
import '../styles/style.css';
import original1 from '../images/original1.jpg';

export default function Intro() {
    return (
        <section className="intro">
            <div className="intro-text">
                <p>Добро пожаловать в мир дельфинов — самых умных, грациозных и загадочных обитателей океана!</p>
                <p>Эти удивительные создания покоряют сердца своей игривостью, высоким интеллектом и невероятной социальностью.</p>
                <p>На этом сайте вы узнаете всё о жизни дельфинов: от их анатомии и поведения до удивительных фактов, о которых вы даже не догадывались.</p>
                <p><strong>Интересный факт:</strong></p>
                <p>Знаете ли вы, что дельфины дают друг другу имена и узнают себя в зеркале?</p>
            </div>
            <div className="intro-image">
                <img src={original1} alt="Дельфины" />
            </div>
        </section>
    );
}
