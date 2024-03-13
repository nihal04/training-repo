function QuickSort(arr) {

    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[Math.floor(Math.random() * arr.length)];

    const left = [];
    const right = [];
    const equal = [];
    for (let element of arr) {
        if (element < pivot) {
            left.push(element);
        } else if (element === pivot) {
            equal.push(element);
        } else {
            right.push(element);
        }
    }
    console.log(left);
    console.log(right);
    console.log(equal);
    console.log('Pivot', pivot);
    return QuickSort(left).concat(equal, QuickSort(right));
}

const nums = [7, 8, 5, 2, 4, 6, 3];

/*
left=[2]
right=[7,8,5,4,6] - left=[], right=[7,8,5,6], equal=[4]
equal=[3]
*/

console.log('Before Sorting an Array');
console.log(nums);
console.log('After sorting an array');
console.log(QuickSort(nums));