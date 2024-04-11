const addForm = document.getElementById("addTransaction")
const editForm = document.getElementById("editTransaction")
let url = 'http://localhost:3000/transactions'

function renderTransaction(transactionData) {
  const transaction = document.createElement('div')
  transaction.classList.add('transaction')
  transaction.id = `transaction-${transactionData.id}`

  const transactionID = document.createElement('p')
  transactionID.classList.add('transactionID')
  transactionID.textContent = "ID: " + transactionData.id

  const name = document.createElement('p')
  name.classList.add('transactionName')
  name.textContent = "Nome: " + transactionData.name

  const value = document.createElement('p')
  value.classList.add('transactionValue')
  value.textContent = "Valor: R$" + transactionData.value

  const buttonDelete = document.createElement('button')
  buttonDelete.classList.add('buttonDelete')
  buttonDelete.textContent = "Apagar"
  buttonDelete.id = transactionData.id

  const br = document.createElement('br')

  buttonDelete.addEventListener('click', removeTransaction)

  transaction.append(transactionID, name, value, buttonDelete, br)
  document.querySelector('#transactions').appendChild(transaction)
}

async function getTransactions() {
  const transactions = await fetch(url).then(res => res.json())
  transactions.forEach(renderTransaction)
  getBalance()
}

document.addEventListener('DOMContentLoaded', () => {
  getTransactions()
})

addForm.addEventListener('submit', async (ev) => {
  ev.preventDefault()

  const transactionData = {
    name: document.getElementById("transactionName").value,
    value: Number(document.getElementById("transactionValue").value)
  }

  const response = await fetch(url, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(transactionData)
  })

  const savedTransaction = await response.json()
  renderTransaction(savedTransaction)
  addForm.reset()
  getBalance()
})

async function removeTransaction(e) {
  let id = e.target.id
  await fetch(`${url}/${id}`, {
    method: "DELETE"
  })

  const transaction = document.getElementById(`transaction-${id}`)
  transaction.remove()
  getBalance()
}

editForm.addEventListener('submit', async (ev) => {
  ev.preventDefault()
  const id = document.getElementById("editTransactionId").value

  const transactionData = {
    id: id,
    name: document.getElementById("editTransactionName").value,
    value: Number(document.getElementById("editTransactionValue").value)
  }

  const response = await fetch(`${url}/${id}`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(transactionData)
  })

  const transaction = document.getElementById(`transaction-${id}`)
  transaction.remove()

  const editedTransaction = await response.json()
  renderTransaction(editedTransaction)
  editForm.reset()
  getBalance()
})

async function getBalance() {
  let balance = 0;
  const transactions = await fetch(url).then(res => res.json())
  transactions.forEach((transaction) => {
    balance += transaction.value;
  })

  const balanceDOM = document.getElementById("balance")
  balanceDOM.textContent = "Saldo: R$" + balance
}