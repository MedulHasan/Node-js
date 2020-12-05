const postRouter = require('express').Router()
const {
    getAllPost,
    getSinglePost,
    getNewPost,
    updatePost,
    deletePost
} = require('./postController')

postRouter.get('/', getAllPost)

postRouter.get('/:postId', getSinglePost)

postRouter.post('/', getNewPost)

postRouter.put('/:postId', updatePost)

postRouter.delete('/:postId', deletePost)

module.exports = postRouter