function BinarySearch(arr, target) {
    let left = 0
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        // Check if target is present in mid
        if (arr[mid] === target) {
            return mid;
        }
        // If target is greater. Ignore left side
        else if (arr[mid] < target) {
            left = mid + 1;
        }
        // If target is smaller. Ignore right side
        else {
            right = mid - 1;
        }
    }
    return -1;
}

const nums = [2, 5, 7, 9, 10, 12];
const targetElement = 9;
const index = BinarySearch(nums, targetElement);
if (index !== -1) {
    console.log(`Element found at ${index} position`);
} else {
    console.log('Element does not exists');
}