import React from "react";

const myStyles = {
    'margin': '50px'
}

const galleryItems = [
    {photo: 'zdjęcie1', url: '/'},
    {photo: 'zdjęcie2', url: '/ś'}
]
const Gallery = () => {
    return (
        <div>
            {galleryItems.map(item => (
            <img key={item.photo} src={item.url} alt={item.photo} style={myStyles}></img>
            ))}
        </div>
    )
}

export default Gallery;