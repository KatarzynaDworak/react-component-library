import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from '../components/Header';
import PagePost from '../components/PagePost';


const App = () => {
    return (
        <>
            <PagePost />
        </>  
    )
};

const root = createRoot(document.querySelector('#root'));

root.render(<App />);
