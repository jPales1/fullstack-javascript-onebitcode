const Author = require("./Author");

const author1 = new Author("João")

const post1 = author1.createPost("Título", "Corpo")

post1.addComment("Cadu", "Muito bom!")
post1.addComment("Carlos", "Muito ruim.")

console.log(author1)
console.log(post1)