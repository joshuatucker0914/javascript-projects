//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Sort each array in ascending order.

function asscendingOrder(arr){
    let min = arr[0];
    let arrayAsscended = [min];
    for(let i = 0; i < arr.length;i++){

        //Identify the smallest number
        if(arr[i] < min){ 
            min = arr[i];
            arrayAsscended.unshift(min); // Place the smallest number at the front
        }
        if(arr[i] !== min) {
        arrayAsscended.push(arr[i]);
        }
    }
    return arrayAsscended;
}

//Sort each array in descending order.

function descendingOrder(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                // Swap the elements if arr[i] is less than arr[j]
                let arrayHolder = arr[i];
                arr[i] = arr[j];
                arr[j] = arrayHolder;
            }
        }
    }
    return arr;
}

console.log(asscendingOrder(nums1));
console.log(descendingOrder(nums1));