import inquirer from "inquirer";
let currency = {
    USD: 1,
    AFN: 71.33,
    PKR: 278.55,
    EUR: 0.93,
    CAD: 1.37,
    AUD: 1.53,
};
let currencyAns = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from Currency",
        type: "list",
        choices: ["USD", "AFN", "PKR", "EUR", "BTN", "AUD"]
    },
    {
        name: "to",
        message: "Enter to Currency",
        type: "list",
        choices: ["USD", "AFN", "PKR", "EUR", "BTN", "AUD"]
    },
    {
        name: "amount",
        message: "Enter from Currency",
        type: "number",
    },
]);
let fromamount = currency[currencyAns.from];
let toamount = currency[currencyAns.to];
let amount = currencyAns.amount;
let baseamount = amount / fromamount;
let convertedamount = baseamount * toamount;
console.log(convertedamount);
