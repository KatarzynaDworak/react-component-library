import React from "react";

const menuItems = [
    {text: 'News', url: '/'},
    {text: 'Regulations', url: '/regulations'}
]

const navStyles = {
    display: 'flex',
    color: 'red',
    textDecoration: 'none',
    listStyleType: 'none'
}

const liStyles = {
    paddingLeft: '25px'
}

const Nav = () => {
    return (

        <ul style={navStyles}>
            {menuItems.map(item => (
                <li key={item.text} style={liStyles}>
                    <a href={item.url}>
                        {item.text}
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default Nav;