import React from "react";

const menuItems = [
    {text: 'start', url: '/'},
    {text: 'regulamin', url: '/regulamin'}
]

const Nav = () => {
    return (
        <ul>
            <li>{ menuItems }</li>
        </ul>
    )
}

export default Nav;