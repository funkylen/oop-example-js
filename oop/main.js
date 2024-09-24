import Warrior from "./Game/warrior"
import Mage from "./Game/mage"
import Rogue from "./Game/rogue"
import LootGenerator from "./Game/LootGenerator"
import Hero from "./Game/hero"

const newWarrior = new Warrior('John')
const newMage = new Mage('Josh')
const newRogue = new Rogue('Bob')

console.log(newWarrior)
console.log(newMage)
console.log(newRogue)
newWarrior.attack(newMage)
newMage.useFireball(newWarrior)

newWarrior.print()
newMage.print()

const lootGenerator = new LootGenerator()
const mageLoot = lootGenerator.generate(newMage)
console.log(mageLoot)

// NOTE: не должно работать
// new Hero('name', 123, 123, 123, 123)