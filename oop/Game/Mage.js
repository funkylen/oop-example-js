import Hero from "./hero";

export default class Mage extends Hero {
    constructor(name) {
        super('Mage', name, 500, 100, 40, 10, 20, 20)
    }

    useFireball(hero) {
        const damage = this.getDamage() * 3 - hero.getDefense()
        if (damage > 0) {
            hero.setHealth(hero.getHealth() - damage)
        }
    }

    generateLoot() {
        return 750;
    }
}