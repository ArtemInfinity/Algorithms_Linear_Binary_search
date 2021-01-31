const array = [1, 7, 2, 8, 3, 9, 4, 5, 5, 6]

let count = 0

function linearSearch(array, item){
    
    const b = array.length
    for(let i=0; i<b; i++){

        count++         
        if(array[i] === item){
            return i
        }
    }
    return null
}

console.log(linearSearch(array, 6))
console.log(count)


