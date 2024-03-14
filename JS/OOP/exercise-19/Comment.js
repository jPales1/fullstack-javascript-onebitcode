class Comment{
  constructor(comment, author){
    this.comment = comment 
    this.author = author
    this.created = new Date()
  }
}

module.exports = Comment