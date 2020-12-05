exports.getAllPost = (req, res) => {
    // console.log(req.query);
    let {a, b, c} = req.query
    res.send('Render all post')
}
exports.getSinglePost = (req, res) => {
    res.send('Render all post: ' + req.params.postId)
}
exports.getNewPost = (req, res) => {
    res.send('Create all post')
}
exports.updatePost = (req, res) => {
    res.send('Update your existing post ' + req.params.postId)
}
exports.deletePost = (req, res) => {
    res.send('Delete your existing post ' + req.params.postId)
}