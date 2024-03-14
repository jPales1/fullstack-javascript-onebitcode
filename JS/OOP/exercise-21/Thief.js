const Character = require("./Character");

class Thief extends Character {
  attack(target) {
    target.healthPoints -= 2 * (this.attackPoints - target.defensePoints)
  }
}

module.exports = Thief