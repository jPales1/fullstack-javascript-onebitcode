module.exports = class Account {
  #balance

  constructor(user) {
    this.balance = 0
    this.deposits = []
    this.loans = []
    this.transfers = []
    this.owner = user
  }

  getBalance() {
    return this.#balance
  }

  newDeposit(deposit) {
    this.#balance += deposit.value
    this.deposits.push(deposit)
  }

  newLoan(loan) {
    this.#balance += loan.value
    this.loans.push(loan)
  }

  newTransfer(transfer) {
    if (transfer.receiverUser.email === this.owner.email) {
      this.#balance += transfer.value
    } else {
      this.#balance -= transfer.value
    }
    this.transfers.push(transfer)
  }

}