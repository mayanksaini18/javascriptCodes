// string to array  str.split(" ") - space work s a seperator
// array to string   str.join
 

// to check the anagram string  -we first have to sort both strings bcoz as we sort both the string the character is align in an order and then it easy to check so we fiRst make that string in an array and thenn sort () bcoz sort() function is works on arrays not on directly string  and thenwe compare !

function sort(str){
    var array = str.split(" ")
array = array.sort()
var sortedArray = array.join("")
return sortedArray
}


function isAnagrams(str1, str2){
    if ( sort(str1)== sort(str2)){

        return true
    }
   else{

       return false
    }
}

var answer = isAnagrams("bbca" , "abbc")
console.log(answer)