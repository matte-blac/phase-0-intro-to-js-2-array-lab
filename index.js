// Write your solution here!

let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(){
    cats.push("Ralph")
}

function destructivelyPrependCat(){
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(){
    let removeLastCat = cats.pop();
    console.log(removeLastCat)
}

function destructivelyRemoveFirstCat(){
    let removeFirstCat = cats.shift()
    console.log(removeFirstCat)
}

function appendCat(name){
    return [...cats, name]
}

const appendOfCats = appendCat('Broom', cats)

console.log(appendOfCats)

function prependCat(name){
    return [name, ...cats]
}

const prependOfCats = prependCat('Arnold', cats)

console.log(prependOfCats)

function removeLastCat(){
    return cats.slice(0, cats.length - 1)
}

function removeFirstCat(){
    return cats.slice(1)
}