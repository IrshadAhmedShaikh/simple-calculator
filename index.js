import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter your firstnumber", type: "number", name: "firstnumber" },
    { message: "Enter your secondnumber", type: "number", name: "secondnumber" },
    {
        message: "select one of your operator to perform action",
        type: "list",
        name: "operator",
        choices: [
            "addition",
            "subtraction",
            "multiplication",
            "divide",
            "module",
            "exponentiation",
        ],
    },
]);
if (answer.operator === "addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operator === "subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operator === "multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operator === "divide") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else if (answer.operator === "module") {
    console.log(answer.firstnumber % answer.secondnumber);
}
else if (answer.operator === "exponentiation") {
    console.log(answer.firstnumber ** answer.secondnumber);
}
else {
    console.log("You Entered Invalid Key");
}
