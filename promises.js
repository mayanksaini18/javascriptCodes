function medician1get(){
    console.log ("medician 1 ")
    setTimeout(medician2get, 3000)
    setTimeout(medician3get, 2000)

}
function medician2get(){
    console.log ("medician 2 ")
}
function medician3get(){
    console.log ("medician 3 ")
}


medician1get();