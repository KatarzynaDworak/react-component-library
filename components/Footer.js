import React from "react";
import Copyrights from "./Copyrights";
import Nav from "./Nav";

const myStyles = {
    display: 'flex',
    margin: '10px',
    justifyContent: 'center'
}

const Footer = () => {
    return (
        // const {text, url} = props.item;
        <>
            <footer style={myStyles}>
                <Copyrights />
                <Nav />
            </footer>
        </>
    )
}

export default Footer;