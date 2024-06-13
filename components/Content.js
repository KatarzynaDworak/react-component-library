import React from "react";
import ContentLeft from './ContentLeft';
import ContentRight from './ContentRight';
import ContentMain from './ContentMain';
import Gallery from "./Gallery";

const myStyles = {
    display: 'flex',
    margin: '30px',
    padding: '15px',
    justifyContent: 'space-around'
}

const Content = () => {
    return (
        <div style={myStyles}>
            <ContentLeft />
            <ContentMain content={Gallery}/>
            <ContentRight />
        </div>
    )
}

export default Content;