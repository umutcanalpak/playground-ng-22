function countUniqueValues(array) {
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        const prevElement = array[i - 1];
        const element = array[i];
        
        if (element !== prevElement) {
            console.log('prevElement: ', prevElement);
            console.log('element: ', element);
            console.log('-----------');
            count++;
        }
    }

    return count;
}


let result;


result  = countUniqueValues([1,1,1,1,1,2]) // 2
console.log(result);
result  = countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
console.log(result);
result  = countUniqueValues([]) // 0
console.log(result);
result  = countUniqueValues([-2,-1,-1,0,1]) // 4
console.log(result);