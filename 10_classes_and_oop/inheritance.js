class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const person = new Teacher("Kishore", "kishore@gmail.com", "12345")

person.logMe()
const user1 = new User("Kishore G")

user1.logMe()

console.log(person instanceof User);