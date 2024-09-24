import { createWarrior, useStrongAttack } from "../no-oop/Game/warrior";
import { createMage, useFireball } from "../no-oop/Game/mage";
import { createRogue, useFastArrow } from "../no-oop/Game/rogue";
import { attack } from "../no-oop/Game/hero";
import { generateLoot } from "../no-oop/Game/LootGenerator";


const newWarrior = createWarrior('john')
const newMage = createMage('bob')
const newRogue = createRogue('josh')

console.log({ newWarrior, newMage })
attack(newMage, newWarrior)
useFireball(newMage, newWarrior)
console.log({ newWarrior, newMage })

console.log(generateLoot(newMage))