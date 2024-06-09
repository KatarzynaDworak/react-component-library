import React from "react";

const menuItems = [
    {text: 'start', url: '/'},
    {text: 'regulamin', url: '/regulamin'}
]

const Nav = () => {
    return (
        <ul>
            {menuItems.map(item => (
                <li key={item.text}>
                    <a href={item.url}>
                        {item.text}
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default Nav;