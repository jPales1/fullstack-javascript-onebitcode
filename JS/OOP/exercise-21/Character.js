class Character{
  constructor(name, healthPoints, attackPoints, defensePoints){
    this.name = name
    this.healthPoints = healthPoints
    this.attackPoints = attackPoints
    this.defensePoints = defensePoints
  }
  
  attack(target){
    target.healthPoints -= this.attackPoints - target.defensePoints
  }
}

module.exports = Character