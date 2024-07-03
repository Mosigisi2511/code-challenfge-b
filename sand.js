//netSalaryCalculator
function netSalaryCalculator () {

    //prompt of the basic salary and the benefits
    prompt = require ('prompt-sync')();
    let basicSalary = parseFloat(prompt("Please Enter a Valid Basic Salary:"));
    let benefits = parseFloat(prompt("Key in Benefits:"));

    if (isNaN (basicSalary), isNaN(benefits) || (basicSalary)<= 0,(benefits) <=0) {
        console.log("Entries must be a number and the basic salary should be >= 0");
    return;}}
