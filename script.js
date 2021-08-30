class Ninja {
  constructor(name, health, speed = 3, strength = 3){
    this.name = name;
    this.health = health;
    this.speed = speed;
    this.strength = strength;
      }
      sayName (){
        console.log(name)
      }
      showStats() {
        console.log(name,health,speed,strength)
      }
      drinkSake () {
        this.health += 10;
      }
  }
 