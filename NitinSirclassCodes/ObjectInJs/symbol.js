   var id = Symbol();
         var user = {
          [id] : 101,
          "name" : "mayank",
          "age" : 20
       };


console.log(user);         
console.log(user[id]);    



let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2); 
console.log(id1 == id2); 

let id3 = Symbol("test")
// console.log("ID is " +id3);
console.log("ID is " +id3.toString());



