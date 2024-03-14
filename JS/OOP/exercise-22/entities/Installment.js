module.exports = class Installment {
  constructor(installmentValue, numberInstallment) {
    this.installmentValue = installmentValue
    this.numberInstallment = numberInstallment
    this.situation = 'pending'
  }
}