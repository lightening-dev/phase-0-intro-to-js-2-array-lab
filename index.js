// Write your solution here!

 const cats = ["Milo", "Otis", "Garfield"]; 



 function destructivelyAppendCat (name) {

    cats.push(name);


 }

 function destructivelyPrependCat(name) {

    cats.unshift(name);
 }
 
function destructivelyRemoveLastCat(){

    cats.pop();
}
function destructivelyRemoveFirstCat() {

    cats.shift();
}
function appendCat(name) {

  const appendCatsArray =  [ ...cats, name ];

  return appendCatsArray;
}

function prependCat(name) {

 const appendCatsArray = [name, ...cats]; 

 return appendCatsArray;

}
function removeLastCat() {

    const removeLastCatArray = [...cats.slice(0, -1)]

    return removeLastCatArray; 
}

function removeFirstCat() {

    const removeFirstCatArray = [...cats.slice(1)]

    return removeFirstCatArray;
}