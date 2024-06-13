import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";

const myStyles = {
    display: 'flex',
    margin: '30px 10px 50px',
    justifyContent: 'center'
}

const Header = () => {
    return (
        < div style={myStyles}>
            <Logo />
            <Nav />
        </div>

    )
}

export default Header;