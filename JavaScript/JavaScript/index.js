// "use strict"

// let name=" vamsi";
// var age=20;
// if (age>18) {
//     let name = "VAMSI";
//     name = "vamcy";
//     console.log(name);
// }
// console.log(name);

// // Objects

    // let employee={
    //     name: "Govardhan",
    //     designation:"Junior Software Developer",
    //     salary:"3.6 LPA",
    //     mobile:8179157847
    // }
    // console.log(employee)


// // Array

    // let employees=["Syam","raja","Akhila"];
    // console.log(employees[2]);

// Alerts

    // type 1
    // alert("Registration completed successfully")

    // type 2   
    //  let number1=prompt("Enter number 1");
    //  console.log(number1)

    // type 3
    // confirm("Are you sure to exit?")

 // console statements

//     console.log("Welcome");
//     console.info("For information");
//     console.warn("check for the code once")
//     console.error("Name is not defined")

// Spread Operator          (used to combine arrays)

    // let external_marks=[23,33,54,44,32,33] 
    // let internal_marks=[12,3,14,16,17]

    // let results=[23,34,external_marks]          //   (Without using spread operator)
    // let final=[23,445,556,...external_marks,...internal_marks]  // (By using spread operator)
    // console.log(results)
    // console.log(final)


// REST PARAMETER    

    // function addition(x,y,...remainData){
    //     console.log(x)
    //     console.log(y)
    //     console.log(remainData)
    //     console.log(typeof(remainData))
    // }

    // addition(2,3,4,5,6,7,8)
  

// Destructuring of array

    // let employees=["Sunil","Gopi","abdul","rahman"]
    // //let name1=employees[0];

    // let [sunil_1,gopinath,...data]=employees
    // console.log(sunil_1)
    // console.log(data)


// Destructuring of object

    // let employee={
    //     name: "Govardhan",
    //     designation:"Junior Software Developer",
    //     salary:"3.6 LPA",
    //     mobile:8179157847
    // }
    // let {name,designation,...remainList}=employee;
    // console.log(name)
    // console.log(designation)
    // console.log(remainList)


// Functions

    // let demo=function(x,y){
    //     return x+y
    // }
    // console.log(demo(3,5))


    // (function(x=4,y=6){
    //     return console.log(x+y)
    // }) ()


    // setTimeout(function(){
    //     console.log("welcome")
    // }, 3000);


    

    // arrow functiom

    // let demo= (x,y) => {
    //     return x*y
    // }
    // console.log(demo(3,4))


// FOR LOOPS IN JS

    let employees=["Dhanunjay","Pavan","Harika","Vignesh"]
    
    // FOR:-
    // for(let i=0;i<employees.length;i++){
    //     console.log(employees[i])
    // }


    // FOR IN
    // for(let i in employees){
    //     console.log(i)
    // }

    // FOR-OF
    // for(let i of employees){
    //     console.log(i)
    // }

   // FOR EACH
    // let result=employees.forEach(function (element) {
    //     return element
    // })
    // console.log(result)

    // employees.forEach(function (element,index) {
    //     console.log(element+" ok "+index)
    // })



// MAP FUNCTION
    // let result=employees.map(function (element,index) {
    //     return element+" k"+index
    // })
    // console.log(employees)
    // console.log(result)


