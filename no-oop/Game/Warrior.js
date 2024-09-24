import { __createHero, getHealth, getClass, getDamage, getDefense } from "./hero";

export function createWarrior(name) {
    return __createHero(name, 'Warrior', 1000, 50, 50, 50, 10, 10);
}

export function useStrongAttack(warrior, hero) {
    if (getClass(warrior) !== 'Warrior') {
        throw Error('hero class must be Warrior')
    }

    const damage = getDamage(warrior) * 5 - getDefense(hero)
    if (damage > 0) {
        hero.__health = getHealth(hero) - damage
    }
}