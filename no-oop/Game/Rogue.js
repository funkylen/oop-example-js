import { __createHero, getHealth, getClass, getDamage, getDefense } from "./hero";

export function createRogue(name) {
    return __createHero(name, 'Rogue', 750, 75, 90, 35, 15, 30);
}

export function useFastArrow(rogue, hero) {
    if (getClass(rogue) !== 'Rogue') {
        throw Error('hero class must be Rogue')
    }

    const damage = getDamage(rogue) * 4 - getDefense(hero)
    if (damage > 0) {
        hero.__health = getHealth(hero) - damage
    }
}