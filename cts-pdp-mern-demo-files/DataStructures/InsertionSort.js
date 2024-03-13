function InsertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        // Save the current element that needs to be inserted
        const current = arr[i];

        // Start comapring the elements before the current element
        let j = i - 1;
        console.log(`Value of i=${i}, j=${j}, current=${current}, arr[j]=${arr[j]}, arr[j+1]=${arr[j + 1]}`);
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = current;
        
    }

    return arr;
}


const nums = [7, 8, 5, 2, 4, 6, 3];
console.log('Before Sorting an Array');
console.log(nums);
console.log('After sorting an array');
console.log(InsertionSort(nums));