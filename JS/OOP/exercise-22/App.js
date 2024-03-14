const Loan = require("./entities/Loan")
const Deposit = require("./entities/Deposit")
const Transfer = require("./entities/Transfer")
const User = require("./entities/User")

module.exports = class App {
  static #users = []

  static findUserForEmail(email) {
    const user = this.#users.find(u => u.email === email)
    if (user) {
      return user
    }
    return null
  }

  static newUser(name, email) {
    const userExists = App.findUserForEmail()
    if (!userExists) {
      this.#users.push(new User(name, email))
    } else {
      throw new Error('Esse e-mail já está em uso!')
    }
  }

  static newDeposit(email, value) {
    const user = this.findUserForEmail(email)
    if (user) {
      const newDeposit = new Deposit(value)
      user.account.newDeposit(newDeposit)
    }
  }

  static newTransfer(sentUserEmail, receiverUserEmail, value) {
    const sentUser = this.findUserForEmail(sentUserEmail)
    const receiverUser = this.findUserForEmail(receiverUserEmail)
    if (sentUser && receiverUser) {
      const newTransfer = new Transfer(sentUser, receiverUser, value)
      sentUser.account.newTransfer(newTransfer)
      receiverUser.account.newTransfer(newTransfer)
    }
  }

  static newLoan(email, value, installmentsNumber) {
    const user = this.findUserForEmail(email)
    if (user) {
      const newLoan = new Loan(value, installmentsNumber)
      user.account.newLoan(newLoan)
    }
  }

  static setInterestRate(newPercentRate) {
    Loan.setInterestRate(newPercentRate)
  }
}