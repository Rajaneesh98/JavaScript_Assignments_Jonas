const raj = {
  firstName: "rajaneesh",
  lastName: "E G",
  birthYear: 1998,
  job: "softwareEngineer",
  num: [1, 2, 3, 4, 5],
  calAge: function (year) {
    this.age = year - this.birthYear;
    return this.age;
  },
};

console.log(
  `hi this ${raj.firstName} and ${raj.num.length} with second index having ${raj.num[2]}`
);

console.log(raj.calAge(2022));
console.log(raj.age);
console.log(raj);
