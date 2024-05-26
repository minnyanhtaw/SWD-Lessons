// class Test {
//   a = "aaa";
//   b = "bbb";

//   x() {
//     return "x";
//   }

//   y() {
//     return "y";
//   }
// }

// // console.log(Test);

// const test = new Test;
// console.log(test);

// class Student {
//   name;
//   age;
//   gender;
//   major;
// }

// const st = new Student();
// st.name = "mg mg";
// st.age = 15;
// st.gender = "male";
// st.major = "SWD";

// console.log(st);

// const st2 = new Student();
// st2.name = "su su";
// st2.age = 14;
// st2.gender = "female";
// st2.major = "SWD";

// console.log(st2);

// class Test {
//   x() {
//     console.log("x");
//   }

//   y() {
//     console.log("y");
//   }

//   constructor(a,b) {
//     console.log("constructor", a, b);
//   }
// }

// const test = new Test("aaa","bbb");
// test.x();
// test.y();

// class Student {
//   constructor(inputName, inputAge, inputGender, inputMajor) {
//     this.name = inputName;
//     this.age = inputAge;
//     this.gender = inputGender;
//     this.major = inputMajor;
//   }

//   birthYear() {
//     return 2024 - this.age;
//   }
// }

// const st1 = new Student("mg mg", 15, "male", "SWD");
// console.log(st1);
// console.log(st1.birthYear());

// const st2 = new Student("su su", 14, "female", "SWD");
// console.log(st2);
// console.log(st2.birthYear());

// const st3 = new Student("mya mya", 14, "female", "SWD");
// console.log(st3);
// console.log(st3.birthYear());

// const st4 = new Student("kyaw kyaw", 14, "male", "SWD");
// console.log(st4);
// console.log(st4.birthYear());

// class Test {
//   a = "aaa";
//   #b = "bbb";
//   constructor() {
//     this.c = "ccc";
//   }
//   x() {
//     console.log(this);
//     return "method x";
//   }
//   z() {
//     console.log(this.#b);
//     return "method z";
//   }
// }

// const test = new Test();
// console.log(test);

class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

class Student extends Person {
  constructor(name, age, gender, major) {
    super(name, age, gender);
    this.major = major;
  }
}

const st = new Student("Mg Mg", 15, "male", "SWD");
console.log(st);
