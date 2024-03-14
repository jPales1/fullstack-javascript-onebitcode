const Installment = require("./Installment")

module.exports = class Loan {
  static #interestRate = 1.01

  constructor(value, installmentsNumber) {
    this.value = value
    this.installments = []
    for (let i = 1; i <= installmentsNumber; i++) {
      this.installments.push(new Installment((value * Loan.#interestRate) / installmentsNumber, i))
    }
    this.createdAt = new Date()
  }

  static getInterestRate() {
    return this.#interestRate
  }

  static setInterestRate(percent) {
    this.#interestRate = percent / 100 + 1
  }
}