const Character = require("./Character");

class Mage extends Character {
  constructor(name, healthPoints, attackPoints, defensePoints, magicPoints) {
    super(name, healthPoints, attackPoints, defensePoints)
    this.magicPoints = magicPoints
  }

  attack(target) {
    target.healthPoints -= (this.magicPoints + this.attackPoints) - target.defensePoints
  }

  heal(target) {
    target.healthPoints += 2 * this.magicPoints
  }
}

module.exports = Mage