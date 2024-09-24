import { createWarrior, useStrongAttack } from "./Game/warrior";
import { createMage, useFireball } from "./Game/mage";
import { createRogue, useFastArrow } from "./Game/rogue";
import { attack } from "./Game/hero";
import { generateLoot } from "./Game/LootGenerator";


const newWarrior = createWarrior('john')
const newMage = createMage('bob')
const newRogue = createRogue('josh')

console.log({ newWarrior, newMage })
attack(newMage, newWarrior)
useFireball(newMage, newWarrior)
console.log({ newWarrior, newMage })

console.log(generateLoot(newMage))