import React from "react";
const Blog = () => {
    const paraStyle ={
        color : "Green",
        fontSize : "20px"
}
    return(
    <div>
        <h1>Blog Page</h1>
        <p style={paraStyle}>Welcome to our Blog page, Please find latest articles here. </p>
    </div>
    );
};
export default Blog;