import React from 'react'
import './BlogCard.css'

function BlogCard({ blog_details }) {
  return (
    <div className='blog-card' style={{ backgroundImage: `url(${blog_details.image})` }}>
      <div className='gradient-color-container'>
        <div className='blog-card-data-container'>
          <div className="blog-card-spacer" />
          <h3>{blog_details.title}</h3>
          <p>{blog_details.paragraph}</p>
          <div className='blog-card-read-more-button-container'>
            <div className="blog-card-spacer" />
            <div className='blog-card-read-more-button'>
              <p>Read More</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogCard