import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Intro from '../components/Intro';
import Gallery from '../components/Gallery';
import { usePageMeta } from '../hooks/usePageMeta';
import { ScrollWrapper } from '../components/ScrollWrapper'; 

export default function MainPage() {
    usePageMeta("Дельфины — Умные и загадочные морские млекопитающие", "Добро пожаловать на сайт о дельфинах! Узнайте об их удивительных способностях, образе жизни, социальном поведении и интересных фактах.");
    
    return (
        <>
            <Navbar />
            <ScrollWrapper>
                <Header />
                <Intro />
                <Gallery />
            </ScrollWrapper>
        </>
    );
}