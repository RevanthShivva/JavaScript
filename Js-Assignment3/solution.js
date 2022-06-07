//Refactor the following function into a one-liner:
// const printName = (name) => {
//   return "Hi" + name;
// };

const printName = (name) => "Hi " + name;
document.write(printName("Revanth"));
document.write ("<br>");


//Rewrite the following code using template literals
// const printBill = (name, bill) => {
//   return "Hi" + name + ", please pay:" + bill;
// };
const printBill = (name, bill) => {
    return `Hi ${name} please pay: ${bill}`;
  };
  document.write ("<br>");
  document.write(printBill("Shekar", 1000));

  //Modify the following code such that the object properties are destructured and logged.
const person = {
    myName: "Noam Chomsky",
    age: 92,
  };
  
  // let myName = person.name;
  // let age = person.age;
  const {myName,age}=person;
  document.write ("<br>");
  document.write(myName);
  document.write(age);