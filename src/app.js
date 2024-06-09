import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from '../components/Header';


const App = () => {
    return (
        <>
            <Header />
        </>  
    )
};

const root = createRoot(document.querySelector('#root'));

root.render(<App />);
