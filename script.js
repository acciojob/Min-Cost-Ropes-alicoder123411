function mincost(arr)
{   let cost = 0;

    while (arr.length > 1) {
        // Sort array in ascending order
        arr.sort((a, b) => a - b);

        // Take two smallest ropes
        let first = arr.shift();
        let second = arr.shift();

        let sum = first + second;
        cost += sum;

        // Push the combined rope back
        arr.push(sum);
    }
    return cost;
}
//write your code here
// return the min cost
module.exports=mincost;
