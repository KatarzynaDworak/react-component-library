import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";

//NIE ustawia w jednej linii Nav i Logo
const myStyles = {
    'display': 'inline-block'
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