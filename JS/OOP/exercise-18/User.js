class User {
  constructor(fullname, email, password) {
    this.fullname = fullname
    this.email = email
    this.password = password
  }

  login(email, password) {
    if (this.email != email || this.password != password)
      console.log("E-mail ou senha não conferem.")
    else
      console.log("Login bem sucedido!")
  }
}

module.exports = User;