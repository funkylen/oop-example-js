export default class Hero {
    // NOTE: Хештег (#) делает свойства приватными, то есть недоступными извне
    #level
    #class
    #name
    #health
    #mana
    #damage
    #defense
    #magicDefense
    #attackSpeed

    constructor(name, className, health, mana, damage, defense, magicDefense, attackSpeed) {

        // NOTE: Делаем класс абстрактным, т.е. не даём создавать класс Hero, только его наследников
        if (this.constructor == Hero) {
            throw new Error("Abstract classes can't be instantiated.");
        }

        this.#level = 1
        this.#class = className
        this.#name = name
        this.#health = health
        this.#mana = mana
        this.#damage = damage
        this.#defense = defense
        this.#magicDefense = magicDefense
        this.#attackSpeed = attackSpeed
    }

    getHealth() {
        return this.#health;
    }

    setHealth(value) {
        this.#health = value;
    }

    getDamage() {
        return this.#damage;
    }

    getDefense() {
        return this.#defense;
    }

    getClass() {
        return this.#class;
    }

    attack(hero) {
        const damage = this.#damage - hero.#defense
        if (damage > 0) {
            hero.#health = hero.#health - damage
        }
    }

    // NOTE: Так как наши свойства приватные, консоль лог будет отдавать пустой объект
    //  Пришлось создать отдельный метод, который печатает информацию о герое
    print() {
        console.log({
            level: this.#level,
            class: this.#class,
            name: this.#name,
            health: this.#health,
            mana: this.#mana,
            damage: this.#damage,
            defense: this.#defense,
            magicDefense: this.#magicDefense,
            attackSpeed: this.#attackSpeed,
        })
    }
}