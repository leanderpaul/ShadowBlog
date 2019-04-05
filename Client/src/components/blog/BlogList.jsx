import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const BlogList = (props) => {
    let { blogs } = props
    if(!blogs) {
        return (
            <div>No Blogs to show !!</div>
        )
    }
    let blogList = blogs.map(blog => {
        return (
            <Link to={'/blog/' + blog._id} key={blog._id} >
                <div className="card z-depth-0">
                    <div className="card-content grey-text text-darken-3 blog-summary">
                        <span className="card-title">{blog.title}</span>
                        <p>Posted by {blog.author.firstName} {blog.author.lastName}</p>
                        <p className="grey-text">{moment(blog.date).calendar()}</p>
                    </div>
                </div>
            </Link>
        )
    })
    return (
        <div>
            {blogList}
        </div>
    )
}

export default BlogList