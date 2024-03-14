const Character = require("./Character");

class Warrior extends Character{
  constructor(name, healthPoints, attackPoints, defensePoints, shieldPoints) {
    super(name, healthPoints, attackPoints, defensePoints)
    this.shieldPoints = shieldPoints
    this.position = "Attack"
  }

  attack(target){
    if(this.position == "Attack"){
      super.attack(target)
    } else{
      console.log("The warrior is in a defense position!")
    }
  }

  changePosition(){
    if(this.position === "Attack"){
      this.position = "Defense"
      this.defensePoints += this.shieldPoints
    } else{
      this.position = "Attack"
      this.defensePoints -= this.shieldPoints
    }
  }
}

module.exports = Warrior