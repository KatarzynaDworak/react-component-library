import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Content from '../components/Content';
import Gallery from '../components/Gallery';

const App = () => {
    return (
        <>
            <Header />
            <Content />
            <Gallery />
            <Footer />
        </>  
    )
};

const root = createRoot(document.querySelector('#root'));

root.render(<App />);

//jak wyrenderować PagePost, skoro mam juz wyrenderowany app.js
// jak pobrać obrazki do galerii/ logo
// dodawanie komponentu przez props