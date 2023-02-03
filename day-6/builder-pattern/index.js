
class User {
    static state = {
        [Symbol.iterator]() {
            const values = Object.values(this)[Symbol.iterator]();

            return {
                next() {
                    return values.next()
                }
            }
        }
    }

    constructor(params) {
        this.name = params.name;
        this.age = params.age;
        this.skills = params.skills;
    }

    static name(name) {
        const state = this.state
        return class extends this {
            static state = {...state, name}
        }
    }

    static age(age) {
        const state = this.state;
        return class extends this{
            static state = {...state, age}
        }
    }

    static skills(skills) {
        const state = this.state
        return class extends this{
            static state = {...state, skills: [...(state.skills ?? []), ...skills]}
        }
    }

    static create() {
        const state = this.state
        return new User(state)
    }
}

console.log(User.name('Bob').age(47).skills(['Coding']).create()); // User({name: 'Bob', age: 47, skills: ['Coding']})