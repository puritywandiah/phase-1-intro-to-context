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
    
    function createEmployeeRecords(array){ 
        return array.map(createEmployeeRecord)
    }
    
    function createTimeInEvent(employee, dateStamp) {
        const obj = {
            type: "TimeIn",function createEmployeRecord(array){
                return record = {
                    firstName: array[0],
                    familyName: array[1],
                    title: array[2],
                    payPerHour: array[3],
                    timeInEvents: [],
                    timeOutEvents: []
                }
                }
                
                function createEmployeeRecords(array){ 
                    return array.map(createEmployeeRecord)
                }
               
                function createTimeInEvent(employee, dateStamp) {
                    const obj = {
                        type: "TimeIn",
                        hour: parseInt(dateStamp.split(' ')[1]),
                        date: dateStamp.split(' ')[0]
                
                    }
                    
                  employee.timeInEvents.push(obj)
                    return employee
                }
                
                function createTimeOutEvent(employee, dateStamp){
                    const obj = {
                        type: "TimeOut",
                        hour: parseInt(dateStamp.split(' ')[1]),
                        date: dateStamp.split(' ')[0]
                
                    }
                    
                  employee.timeOutEvents.push(obj)
                    return employee
                }
                
               
                function hoursWorkedOnDate(employee, dateStamp) {
                    let timeIn = employee.timeInEvents.find(function(e){
                       return e.date === dateStamp
                    })
                    let timeOut = employee.timeOutEvents.find(function(e){
                        return e.date === dateStamp
                    })
                        return (timeOut.hour - timeIn.hour) / 100
                }
                
                function wagesEarnedOnDate(employee, dateStamp) {
                    let earnedMoney = hoursWorkedOnDate(employee, dateStamp)
                        * employee.payPerHour
                    return parseFloat(earnedMoney,toString())
                }
                
                function allWagesFor(employee){
                let availableDates = employee.timeInEvents.map(function(e){
                    
                    return e.date
                })
                 let sum = availableDates.reduce((previousValue, currentValue) => { 
                    return previousValue + wagesEarnedOnDate(employee, currentValue)  
                }, 0); 
                
                    return sum
                }
                
                function calculatePayroll(employee){
                    return employee.reduce((previousValue, currentValue) => {
                   
                   return previousValue + allWagesFor(currentValue)
                }, 0)
                }
            hour: parseInt(dateStamp.split(' ')[1]),
            date: dateStamp.split(' ')[0]
    
        }
        
      employee.timeInEvents.push(obj)
        return employee
    }

    function createTimeOutEvent(employee, dateStamp){
        const obj = {
            type: "TimeOut",
            hour: parseInt(dateStamp.split(' ')[1]),
            date: dateStamp.split(' ')[0]
    
        }
        
      employee.timeOutEvents.push(obj)
        return employee
    }
    
    function hoursWorkedOnDate(employee, dateStamp) {
        let timeIn = employee.timeInEvents.find(function(e){
           return e.date === dateStamp
        })
        let timeOut = employee.timeOutEvents.find(function(e){
            return e.date === dateStamp
        })
            return (timeOut.hour - timeIn.hour) / 100
    }
    
    function wagesEarnedOnDate(employee, dateStamp) {
        let earnedMoney = hoursWorkedOnDate(employee, dateStamp)
            * employee.payPerHour
        return parseFloat(earnedMoney,toString())
    }
    
    function allWagesFor(employee){
    let availableDates = employee.timeInEvents.map(function(e){
      
        return e.date
    })
     let sum = availableDates.reduce((previousValue, currentValue) => { 
        return previousValue + wagesEarnedOnDate(employee, currentValue)  
    
        return sum
    }
    
    function calculatePayroll(employee){
        return employee.reduce((previousValue, currentValue) => {
       rlearneturn previousValue + allWagesFor(currentValue)
    }, 0)
    }