const projects = ["project1","project2","project3","project4","project5"];

var pro1 = projects.slice(1);

console.log (pro1)
console.log('+++++++++++++++++++++++++++++++++++')
// Using slice, create newCar from myCar.
let myHonda = { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } }
let myCar = [myHonda, 2, 'cherry condition', 'purchased 1997']
let newCar = myCar.slice(0, 2)

// Display the values of myCar, newCar, and the color of myHonda
//  referenced from both arrays.
// console.log('myCar = ' + JSON.stringify(myCar))
console.log(myCar)

console.log('+++++++++++++++++++++++++++++++++++')
console.log('newCar = ' + JSON.stringify(newCar))
console.log('myCar[0].color = ' + myCar[0].color)
console.log('newCar[0].color = ' + newCar[0].color)

console.log('+++++++++++++++++++++++++++++++++++')


var myObj = {a: "aaa",b: "bbb",c: "ccc",d: "ddd"}

function filterObject(obj,filterObject){
    var newObj = {}
    for(key in obj){
        if(!filterObject[key]){
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

console.log(filterObject(myObj,{a:true,b:true}))