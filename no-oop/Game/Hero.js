export function __createHero(
    name,
    className,
    health,
    mana,
    damage,
    defense,
    magicDefense,
    attackSpeed,
) {
    return {
        __level: 1,
        __name: name,
        __class: className,
        __health: health,
        __mana: mana,
        __damage: damage,
        __defense: defense,
        __magicDefense: magicDefense,
        __attackSpeed: attackSpeed,
    }
}

export function getHealth(hero, value) {
    return hero.__health;
}

export function getDamage(hero, value) {
    return hero.__damage;
}

export function getDefense(hero, value) {
    return hero.__defense;
}

export function getClass(hero, value) {
    return hero.__class;
}

export function attack(hero1, hero2) {
    const damage = getDamage(hero1) - getDefense(hero2)
    if (damage > 0) {
        hero2.__health = getHealth(hero2) - damage
    }
}