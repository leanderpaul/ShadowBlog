var router = require('express').Router();
var lib = require('./../library');

router.post('/new-post', async (req, res) => {
    try {
        if (!req.body.user) {
            throw 'Login to create a post';
        }
        let blogData = req.body;
        blogData.author = req.body.user;
        let blogResult = await lib.blogLibrary.addNewBlog(blogData);
        if (blogResult.err) {
            throw blogResult.err;
        } else {
            return res.json({
                success: true,
                msg: 'Post successfully made !'
            });
        }
    } catch (err) {
        console.log(err);
        return res.json({
            success: false,
            msg: err
        });
    }
});

router.get('/all-blogs', async (req,res) => {
    try {
        let result = await lib.blogLibrary.getAllBlogs();
        return res.json(result)
    } catch (err) {
        return res.json({
            err: 'Server error',
            blogs: null
        });
    }
});

router.get('/blog/:id', async (req,res) => {
    try {
        let result = await lib.blogLibrary.getOneBlog(req.params.id);
        return res.json(result);
    } catch (err) {
        return res.json({
            err: 'Internal server error',
            blog: null
        });
    }
})

module.exports = router;