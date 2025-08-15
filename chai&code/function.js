function greet(name){
    console.log(`hello ${name}`)
}
greet('mayank')

function teaOrder(teaType){
 let result = confirmOrde();
  function confirmOrde(){
        return "order confirmed for chai"
    }

    return result;
}
let output =teaOrder();
console.log(output);


function greeting(){

return
}
// Arrow function type 1 
const arrowFunc=()=>{

return
}
// Arrow function type-2
const arrowFuntion=()=>  "mayank";
// no need of return keyword  it implicitly return mayank

function createTeaMaker(){
    return function (teaType){
        return `Making ${teaType}`
    }
}
let teamaker =createTeaMaker();
console.log(teamaker('masala chai'));