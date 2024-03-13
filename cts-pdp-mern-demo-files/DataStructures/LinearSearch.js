function LinearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

const nums = [8, 3, 6, 1, 7, 2, 5];
const targetElement = 6;
const index = LinearSearch(nums, targetElement);
if (index !== -1) {
    console.log(`Element found at ${index} position`);
} else {
    console.log('Element does not exists');
}