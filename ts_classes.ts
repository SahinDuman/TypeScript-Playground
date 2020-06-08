interface UserInterface {
  name: string;
  email: string;
  age: number;
  register();
  payInvoice();
}

class User implements UserInterface {
  name: string;
  email: string;
  age: number;

  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;

    console.log('user created: ' + this.name);
  }

  register() {
    console.log(this.name + ' is now registered');
  }

  payInvoice() {
    console.log(this.name + ' payed invoice');
  }
}

class Member extends User {
  id: number;

  constructor(id: number, name: string, email: string, age: number) {
    super(name, email, age);
    this.id = id;
  }

  payInvoice() {
    super.payInvoice();
  }
}

let marcus = new Member(1, 'Marcus', 'marcus@kalmar.com', 28);
marcus.payInvoice();
//let sahin = new User('Sahin', 'sahin@aslan.com', 25);

//sahin.register();
