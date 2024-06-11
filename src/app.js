import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Content from '../components/Content';


const App = () => {
    return (
        <>
            <Header />
            <Content />
            <Footer />
        </>  
    )
};

const root = createRoot(document.querySelector('#root'));

root.render(<App />);