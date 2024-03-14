const Comment = require("./Comment.js")

class Post {
  constructor(title, body, author) {
    this.title = title
    this.body = body
    this.author = author
    this.comments = []
    this.created = new Date()
  }

  addComment(comment, author){
    this.comments.push(new Comment(comment, author))
  }
}

module.exports = Post