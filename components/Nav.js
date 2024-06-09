import React from "react";

const menuItems = [
    {text: 'News', url: '/'},
    {text: 'Regulations', url: '/regulations'}
]

const styles = {
    color: 'red',
    'text-decoration': 'none',
    'list-style-type': 'none'
}

const Nav = () => {
    return (

        <ul>
            {menuItems.map(item => (
                <li key={item.text} style={styles}>
                    <a href={item.url} style={styles}>
                        {item.text}
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default Nav;