console.log('linked profile');
class Profile {
    constructor(uName, age, email, number) {
        this._uName = uName;
        this._age = age;
        this._email = email;
        this._number = number;
    }
    //SETTERS
    set uName(uName) {
        this._uName = uName;
    }
    set age(age) {
        this._age = age;
    }
    set email(email) {
        this._email = email;
    }
    set number(number) {
        this._number = number;
    }

    //GETTERS
    get uName() {
        return this._uName;
    }
    get age() {
        return this._age;
    }
    get email() {
        return this._email;
    }
    get number() {
        return this._number;
    }

    toString() {
        return `${this.uName} ${this.age} ${this.email} ${this.number}`
    }

}

