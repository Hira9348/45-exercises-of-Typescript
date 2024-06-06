import inquirer from "inquirer";


let answers = await inquirer.prompt([
    {message: "Enter firstNumber", type: "number", name: "firstNumber"},
    {message: "Enter secondNumber", type: "number", name: "secondNumber"},
    {
        message: "select one operator to perform operations",
        type: "list",
        name: "operator",
        choices: ["Addition","Subtractions","Multiplication","Division",]
    },
]);

//conditional statements if-Else
if(answers.operator === "Addition"){
    console.log(answers.firstNumber + answers.secondNumber)
}
else if (answers.operator === "Subtractions"){
    console.log(answers.firstNumber - answers.secondNumber)
}
else if (answers.operator === "Multiplication"){
    console.log(answers.firstNumber * answers.secondNumber)
} 
else if (answers.operator === "Division"){
    console.log(answers.firstNumber / answers.secondNumber)
}
else {
  console.log("Invalid input")
} 