const form = document.getElementById("form")
let email, password

function verify(e) {
  e.preventDefault()
  email = document.getElementById("email").value
  password = document.getElementById("password").value
  try {
    verifyEmail(email)
    verifyPassword(password)
  } catch (error) {
    alert(error.message)
  }
}

function verifyEmail(email) {
  if (!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)) {
    throw new Error("O e-mail não é válido!")
  }
}

function verifyPassword(password) {
  if (password.length < 8 ||
    !password.match(/[a-z]/) ||
    !password.match(/[A-Z]/) ||
    !password.match(/[0-9]/) ||
    !password.match(/[^a-zA-Z0-9\s]/)
  ) {
    throw new Error("A senha não é válida!")
  }
}

form.addEventListener("submit", verify)