const App = require("./App")

App.newUser("Isaac Pontes", "isaac@email.com")
App.newUser("Lucas Queiroga", "lucas@email.com")
App.newUser("Juliana Conde", "juliana@email.com")

App.newDeposit("isaac@email.com", 100)

App.newTransfer("isaac@email.com", "lucas@email.com", 20)

App.setInterestRate(10)
App.newLoan("juliana@email.com", 2000, 24)

console.log(App.findUserForEmail("isaac@email.com"))
console.log(App.findUserForEmail("isaac@email.com").account)
console.log(App.findUserForEmail("lucas@email.com"))
console.log(App.findUserForEmail("lucas@email.com").account)
console.log(App.findUserForEmail("juliana@email.com"))
console.log(App.findUserForEmail("juliana@email.com").account)
console.log(App.findUserForEmail("juliana@email.com").account.loans[0].installments)
