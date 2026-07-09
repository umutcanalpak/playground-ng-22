function maxSubarraySum(arr, length) {
  for (const num of arr) {
    if (diffMemory[num]) {
      return true;
    }

    diffMemory[num - diff] = true;
    diffMemory[num + diff] = true;
}
  
  return false;
}

let result;

result = maxSubarraySum([100,200,300,400], 2) // 700
console.log(result);
result = maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
console.log(result);
result = maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
console.log(result);
result = maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
console.log(result);
result = maxSubarraySum([2,3], 3) // null
console.log(result);
