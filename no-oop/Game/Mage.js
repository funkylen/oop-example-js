import { __createHero, getHealth, getClass, getDamage, getDefense } from "./hero";

export function createMage(name) {
    return __createHero(name, 'Mage', 500, 100, 40, 10, 20, 20);
}

export function useFireball(mage, hero) {
    if (getClass(mage) !== 'Mage') {
        throw Error('hero class must be mage')
    }

    const damage = getDamage(mage) * 3 - getDefense(hero)
    if (damage > 0) {
        hero.__health = getHealth(hero) - damage
    }
}
