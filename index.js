//Node.js Built-in Module
import path from "path";

//Third Party Module
import chalk from "chalk";

//Custom Modules
import { Calculator } from "./myModules/Calculator.js";
import { generatePassword } from "./myModules/Password.js";

// Registration Number Output
console.log(chalk.cyan( "Registration Number: BD/2025/TC3/131" ))

//Path Module
console.log(chalk.blue("Current file basename: " + path.basename(import.meta.url)));


//Shoe Generated Password 
console.log(chalk.green("Generated Password (8 chars): " + generatePassword(8)));

// Calculator Use
const calc = new Calculator;


let x = 20, y = 5;
console.log(chalk.yellow( `Addition: ${x} + ${y} = ${calc.add(x, y)}` ));
console.log(chalk.red( `Subtract: ${x} - ${y} = ${calc.subtract(x, y)}` ));
console.log(chalk.black( `Multiplication: ${x} * ${y} = ${calc.multiply(x, y)}` ));
console.log(chalk.greenBright( `Division: ${x} / ${y} = ${calc.divide(x, y)}` ));