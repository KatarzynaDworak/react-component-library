import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Content from '../components/Content';
import Gallery from '../components/Gallery';
import PagePost from '../components/PagePost';

const App = () => {
    return (
        <>
            <Header />
            <Content />
            <Gallery />
            <Footer />
            <PagePost />
        </>  
    )
};

const root = createRoot(document.querySelector('#root'));

root.render(<App />);

// jak pobrać obrazki do galerii/ logo
// pliki powinny być jsx?