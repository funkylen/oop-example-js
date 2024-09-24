import Hero from "./hero";

export default class Warrior extends Hero {
    constructor(name) {
        super('Warrior', name, 1000, 50, 50, 50, 10, 10)
    }

    useStrongAttack(hero) {
        const damage = this.getDamage() * 5 - hero.getDefense()
        if (damage > 0) {
            hero.setHealth(hero.getHealth() - damage)
        }
    }

    generateLoot() {
        return 1000;
    }
}