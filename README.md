# raheemat_calculator
A Node.js calculator application that demonstrates the use of local, third party, and custom modules.

- Usage of **built-in Node.js modules** (`path`)
- Usage of a **third-party module** (`chalk` for colorful output)
- Creation of **custom modules** (`calculator.js` and `password.js`)

Folder Structure
raheemat-calculator/
│── app.js # Main entry file
│── package.json # Project config and dependencies
│── .gitignore # Ignore node_modules
│── myModule/
│ ├── calculator.js # Calculator module (class-based)
│ └── password.js # Password generator module

**Clone this repo**  
   ```bash
   git clone https://github.com/amooraheemat/raheemat-calculator.git
   cd raheemat-calculator
Install dependencies

bash
Copy code
npm install
Run the app

bash
Copy code
node app.js
🧮 Features
1. Calculator Module (calculator.js)
Implemented using a class with methods:

add(a, b)

subtract(a, b)

multiply(a, b)

divide(a, b)

Example:

js
Copy code
import { Calculator } from "./myModule/calculator.js";

const calc = new Calculator();
console.log(calc.add(10, 5)); // 15
2. Password Generator (password.js)
Generates secure random passwords with letters, numbers, and symbols.

Example:

js
Copy code
import { generatePassword } from "./my_module/password.js";

console.log(generatePassword(8)); // Example: "Ab3#kL9x"
3. App (index.js)
Prints your registration number (in cyan)

Uses path to display the current file basename (in blue)

Generates a random password (in green)

Runs calculator operations (addition, subtraction, multiplication, division) with results in different chalk colors

🎨 Console Output Example
yaml
Copy code
Registration Number: XYZ123456
Current file basename: index.js
Generated Password (8 chars): aK3l#Xp9
Addition: 20 + 5 = 25
Subtraction: 20 - 5 = 15
Multiplication: 20 * 5 = 100
Division: 20 / 5 = 4