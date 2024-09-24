import { __createHero, getHealth, getClass, getDamage, getDefense } from "./hero";

export function generateLoot(hero) {
    const heroClass = getClass(hero)

    if (heroClass === 'Warrior') {
        return 1000
    }
    if (heroClass === 'Mage') {
        return 750
    }
    if (heroClass === 'Rogue') {
        return 800
    }
    throw Error('Undefined hero class')
}