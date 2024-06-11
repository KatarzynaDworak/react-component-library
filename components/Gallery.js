import React from "react";

const myStyles = {
    display: 'flex',
    margin: '50px 100px 50px 70px',
    justifyContent: 'space-between'
}

const imgStyles = {
    paddingLeft: '20px'
}

const galleryItems = [
    {photo: 'zdjęcie1', url: '/'},
    {photo: 'zdjęcie2', url: '/ś'},
    {photo: 'zdjęcie2', url: '/ś'}
]
const Gallery = () => {
    return (
        <div style={myStyles}>
            {galleryItems.map(item => (
            <img key={item.photo} src={item.url} alt={item.photo} styles={imgStyles}></img>
            ))}
        </div>
    )
}

export default Gallery;