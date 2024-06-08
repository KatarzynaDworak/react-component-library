import React from "react";
import Copyrights from "./Copyrights";
import Nav from "./Nav";

//NIE DZIAŁA
// const menuItems = [
//     {text: 'start', url: '/'},
//     {text: 'regulamin', url: '/regulamin'}
// ]

const menuItems = {text: 'start', url: '/'};

const Footer = () => {
    return (
        // const {text, url} = props.item;
        <>
            <footer>
                <Copyrights />
                <Nav item={ menuItems } />
            </footer>
        </>
    )
}

export default Footer;