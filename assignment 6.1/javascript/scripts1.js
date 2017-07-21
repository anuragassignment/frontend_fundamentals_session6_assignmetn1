// Contstructor Object Patter for the Employee Object

function Employee(userName, skills, basicSalary) {

    this.userName = userName;
    this.skills = skills;
    this.basicSalary = basicSalary;
}

// printDetails function 
Employee.prototype.printDetails = function() {

    alert('userName: ' + this.userName + ' | skills: ' + this.skills.join(' & ') + ' | basicSalary: ' + this.basicSalary);

}


// salary Increment function
Employee.prototype.salaryIncrement = function() {
    var salaryInput = prompt('Input the basic salary of ' + this.userName + ' in Rupees');
    var working_hr = prompt('Input the daily working hours of ' + this.userName);

    if (parseInt(salaryInput) >= 15000 && working_hr > 10) {
        this.basicSalary = parseInt(salaryInput);
        var bonus = 0.10 * this.basicSalary;
        this.basicSalary = this.basicSalary + bonus;
        var salaryIncrementResult = document.getElementById('salaryIncrementResult');
        var resultElement = document.createElement('p');
        var resultText = document.createTextNode('Basic salary of ' + this.userName + ' with added 10% bonus is Rs. ' + this.basicSalary);
        salaryIncrementResult.appendChild(resultElement);
        resultElement.appendChild(resultText);

    } else {

        this.basicSalary = parseInt(salaryInput);
        bonus = 0.05 * this.basicSalary;
        this.basicSalary = this.basicSalary + bonus;
        var salaryIncrementResult = document.getElementById('salaryIncrementResult');
        var resultElement = document.createElement('p');
        var resultText = document.createTextNode('Basic salary of ' + this.userName + ' with added 5% bonus is Rs. ' + this.basicSalary);
        salaryIncrementResult.appendChild(resultElement);
        resultElement.appendChild(resultText);
    }
}




//new object created using object constructor pattern
var JohnDoe = new Employee('John Doe', ['Developer', 'Designer'], 50000);

// var JaneDoe = new Employee('Jane Doe', ['Team Lead','Developer'], 13000);

//Invokation of salary Increment function

JohnDoe.salaryIncrement();

// JaneDoe.salaryIncrement();