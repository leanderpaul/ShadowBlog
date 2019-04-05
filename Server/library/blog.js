var models = require('./../models');

const addNewBlog = async (blogData) => {
    try {
        let blog = await models.blogModel.create(blogData);
        if (!blog)
            throw 'Cant create the blog';
        return {
            blog: blog,
            err: null
        }
    } catch (err) {
        return {
            err,
            blog: null
        };
    }
}

const getAllBlogs = async () => {
    try {
        let blogs = await models.blogModel.find().populate('author','firstName lastName');
        if(!blogs)
            throw 'No blogs found';
        return {
            blogs: blogs,
            err: null
        };
    } catch (err) {
        return {
            blogs: null,
            err: err
        };
    }
}

const getOneBlog = async (id) => {
    try {
        let blog = await models.blogModel.findById(id).populate('author','firstName lastName');
        if(!blog)
            throw 'Blog not found !';
        return {
            blog,
            err: null
        };
    } catch (err) {
        return {
            blog: null,
            err: err
        };
    }
}

module.exports = {
    addNewBlog,
    getAllBlogs,
    getOneBlog
};