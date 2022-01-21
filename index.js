const inquirer = require("inquirer");

inquirer.prompt([
    {
        type:"input",
        message:"tell me something?",
        name:"testVariable"
    }
]).then(ans=>{
    console.log(ans)
})