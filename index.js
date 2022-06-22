// Your code here
function createEmployeeRecord(array){
    let record 
    return record = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    }
    //converting each nested array into an employee record and making new array
    function createEmployeeRecords(array){ 
        return array.map(createEmployeeRecord)
    }
    //creates the type, date and timeIN and returns employees with new obj
    function createTimeInEvent(employee, dateStamp) {
        const obj = {
            type: "TimeIn",
            hour: parseInt(dateStamp.split(' ')[1]),
            date: dateStamp.split(' ')[0]
    
        }
        
      employee.timeInEvents.push(obj)
        return employee
    }
    //creates the type, date and timeOUT and returns employees with new obj
    function createTimeOutEvent(employee, dateStamp){
        const obj = {
            type: "TimeOut",
            hour: parseInt(dateStamp.split(' ')[1]),
            date: dateStamp.split(' ')[0]
    
        }
        
      employee.timeOutEvents.push(obj)
        return employee
    }
    
    //calculating worked hours(2h) on exact date
    function hoursWorkedOnDate(employee, dateStamp) {
        let timeIn = employee.timeInEvents.find(function(e){
           return e.date === dateStamp
        })
        let timeOut = employee.timeOutEvents.find(function(e){
            return e.date === dateStamp
        })
            return (timeOut.hour - timeIn.hour) / 100
    }
    //calculating earned wages on given date(27$ per hour) using hours worked
    function wagesEarnedOnDate(employee, dateStamp) {
        let earnedMoney = hoursWorkedOnDate(employee, dateStamp)
            * employee.payPerHour
        return parseFloat(earnedMoney,toString())
    }
    //return the total wages for all the dates worked
    //getting all the dates first and then returning total number
    //Using `wagesEarnedOnDate`, sum the value of all dates worked by the employee in the record
    function allWagesFor(employee){
    let availableDates = employee.timeInEvents.map(function(e){
        // console.log(e)
        return e.date
    })
     let sum = availableDates.reduce((previousValue, currentValue) => { //currentValue represents all dates
        return previousValue + wagesEarnedOnDate(employee, currentValue)  //adding earned wages to previousValue(availableDates)
    }, 0); //setting up previousValue to 0
    
        return sum
    }
    //calculate payroll for all employees for all dates
    function calculatePayroll(employee){
        return employee.reduce((previousValue, currentValue) => {
        // console.log(previousValue)
        // console.log(currentValue)
       return previousValue + allWagesFor(currentValue)
    }, 0)
    }