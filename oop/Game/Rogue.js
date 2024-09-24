import Hero from "./hero";

export default class Rogue extends Hero {
    constructor(name) {
        super('Rogue', name, 750, 75, 90, 35, 15, 30)
    }

    useFastArrow(hero) {
        const damage = this.getDamage() * 4 - hero.getDefense()
        if (damage > 0) {
            hero.setHealth(hero.getHealth() - damage)
        }
    }

    generateLoot() {
        return 800;
    }
}