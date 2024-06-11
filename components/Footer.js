import React from "react";
import Copyrights from "./Copyrights";
import Nav from "./Nav";

const Footer = () => {
    return (
        // const {text, url} = props.item;
        <>
            <footer>
                <Copyrights />
                <Nav />
            </footer>
        </>
    )
}

export default Footer;