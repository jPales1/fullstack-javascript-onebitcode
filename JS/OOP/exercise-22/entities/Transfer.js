module.exports = class Transfer {
  constructor(sentUser, receiverUser, value) {
    this.sentUser = sentUser
    this.receiverUser = receiverUser
    this.value = value
    this.createdAt = new Date()
  }
}