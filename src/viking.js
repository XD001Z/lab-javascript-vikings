// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }

    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }
    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`  
        }
        return `${this.name} has died in act of combat`
    }
    battleCry() {
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier{
    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`     
        }
        return `A Saxon has died in combat`
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }
    addViking(viking) {
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }
    vikingAttack() {
       let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
       let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
       let result = this.saxonArmy[saxonIndex].receiveDamage(this.vikingArmy[vikingIndex].attack())
       if (this.saxonArmy[saxonIndex].health <= 0) {
           this.removeDead("saxon", saxonIndex)
       }
       return result
    }
    saxonAttack() {
        let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
        let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
        let result = this.vikingArmy[vikingIndex].receiveDamage(this.saxonArmy[saxonIndex].attack())
        if (this.vikingArmy[vikingIndex].health <= 0) {
            this.removeDead("viking", vikingIndex) 
        }
        return result
    }
    removeDead(attackedArmy, index) {
        if (attackedArmy === "viking") {
            this.vikingArmy.splice(index, 1)   
        }
        else if (attackedArmy === "saxon") {
            this.saxonArmy.splice(index, 1)
        }
    }
    showStatus() {
        if (this.saxonArmy.length === 0) {
            return `Vikings have won the war of the century!`
        }
        else if (this.vikingArmy.length === 0) {
            return `Saxons have fought for their lives and survived another day...`
        }
        else {
            return `Vikings and Saxons are still in the thick of battle.`
        }
    }

}
