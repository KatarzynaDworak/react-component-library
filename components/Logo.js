import React from "react";

const myStyles = {
    border: '1px solid red',
    hight: '100px',
    width: '100px'
}

const Logo = () => {
    return 
        <>
            <div>Logo</div>
            // <img src={''} alt={'LOGO'} style={ myStyles } />
            <div style={ myStyles }></div>
        </>
}

export default Logo;