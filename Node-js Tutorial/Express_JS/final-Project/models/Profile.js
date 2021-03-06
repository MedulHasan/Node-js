const {Schima, model, Schema} = require('mongoose')

// const User = require('./User')
// const Post = require('./Post')

const profileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 30
    },
    title: {
        type: String,
        trim: true,
        maxlength: 100
    },
    bio: {
        type: String,
        trim: true,
        maxlength: 500
    },
    profilePic: {
        type: String
    },
    links: {
        website: String,
        facebook: String,
        twitter: String,
        github: String
    },
    post: [
        {
            type: Schima.Types.ObjectId,
            ref: 'Post'
        }
    ],
    bookmarks: [
        {
            type: Schima.Types.ObjectId,
            ref: 'Post'
        }
    ]
}, {
    timestamps: true
})

const Profile = model('Profile', profileSchema)

module.exports = Profile