class Student {
  constructor() {
    this.name = "nassir";
    this.gender = "male";
  }
}

Student.prototype.sal = 60000;

Student.prototype.show = function () {
  console.log(this.name, this.gender, this.sal);
};

st1 = new Student();
st1.show();

st2 = new Student();
st2.show();

function Employee() {
  this.name = "Sazid";
  this.gender = "Male";
}

Employee.prototype.age = 60000;

em1 = new Employee();
console.log(em1.name, em1.gender, em1.age);

em2 = new Employee();
console.log(em2.name, em2.gender, em2.age);
