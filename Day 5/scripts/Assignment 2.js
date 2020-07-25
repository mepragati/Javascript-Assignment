class User {
    constructor(name, age,email) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.luCoins = 0;
      this.courses = [];
    }

    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }
    
    getDetails(){
        console.log(`Name is ${this.name}, email is ${this.email} has ${this.luCoins} coins and has opted for ${this.courses} courses.`);
        return this;
    }

}

class Moderator extends User{
    constructor(name,age,email,role){
        super(name,age,email);
        this.role = role;
    }

    addCoins(){
        this.luCoins++;
        console.log(`${this.name} has ${this.luCoins} coins`);
        return this;
    }

    removeCoins(){
        this.luCoins--;
        console.log(`${this.name} has ${this.luCoins} coins`);
        return this;
    }

}

class Admin extends Moderator{
   addCourse(user,course){
       user.courses.push(course);
       console.log(user);
   }

   removeCourse(user,course){
    user.courses.push(course);
    console.log(user);
}
}


let user1 = new User('Anshu',25,'anshu@gmail.com')
let user2 = new User('Ankit',23,'ankit@gmai.com')
let mod = new Moderator('Jai',16,'jai@gmail.com','Moderator');
let admin = new Admin('Pragati',19,'pragati@gmail.com');
let users = [user1,user2,mod,admin];

admin.addCourse(user1,'Javascript');
admin.addCourse(user1,'Python');
mod.addCoins();
user1.getDetails();
user2.getDetails();
mod.getDetails();
admin.getDetails();




