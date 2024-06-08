import React from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import Post from "./Post";

const post = {
    title: 'Hello React',
    body: 'Lorem ipsum...',
    author: 'Mirek Lorek',
    created: '2019-01-01 01:02:03'
}

const PagePost = () => {
    return (
        <>
            <div>PagePost</div>
            <Header />
            <Content 
                main={ <Post data={ post }/> }/>
            <Footer />
        </>
    )
}

export default PagePost;