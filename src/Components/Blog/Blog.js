import React from 'react'
import Title from '../../Widgets/Title/Title'
import './Blog.css'
import BlogCard from './BlogCard'
import blog_data from '../../constants/blog'
function Blog({theme}) {
  
  return (
    <div id="blog" className='blog-body' style={{ backgroundColor: !theme ? "#DDDDDD" : "#121212", color: theme ? "white" : "#121212" }}>
        <Title title="Blog"/>
        <div className='blog-card-container'>
            <BlogCard blog_details = {blog_data[0]}/>
            <BlogCard blog_details = {blog_data[1]}/>
            <BlogCard blog_details = {blog_data[2]}/>
        </div>
        {/* <div className='blog-card-container-small-screen'>
            <BlogCard  blog_details = {blog_data[0]}/>
        </div> */}
        <div className='view-more-button-container'>
            <div className="blog-view-more-button">
                <p>View More</p>
            </div>
        </div>
    </div>
  )
}

export default Blog