import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";


console.log(blogData);

function App() {
const blogName = blogData.name;
const blogImage = blogData.image;
const blogAbout = blogData.about;
const blogPosts = blogData.posts;

return (
<div className="App">
<Header name={blogName} />
<About image={blogImage} about={blogAbout} />
<ArticleList posts={blogPosts} />
</div>
);
}

export default App;