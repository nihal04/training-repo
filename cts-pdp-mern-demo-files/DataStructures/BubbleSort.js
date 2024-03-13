function BubbleSort(arr) {
    // let temp = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // temp = arr[j];
                // arr[j] = arr[j + 1];
                // arr[j + 1] = temp;
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

const nums = [64, 34, 12, 25, 11, 22, 43];
console.log('Before Sorting an Array');
console.log(nums);
console.log('After sorting an array');
console.log(BubbleSort(nums));