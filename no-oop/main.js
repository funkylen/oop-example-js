import Warrior from "../oop/Game/warrior"
import Mage from "../oop/Game/mage"
import Rogue from "../oop/Game/rogue"
import LootGenerator from "../oop/Game/LootGenerator"
import Hero from "../oop/Game/hero"

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