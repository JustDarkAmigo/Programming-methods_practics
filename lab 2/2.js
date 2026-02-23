function shellSort(arr, gaps) {
    const n = arr.length;

    for (let g = 0; g < gaps.length; g++) {
        const gap = gaps[g];

        for (let i = gap; i < n; i++) {
            const temp = arr[i];
            
            let j;
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap];
            }

            arr[j] = temp;
        }
    }
    
    return arr;
}

function generateRandomArray(n, a, b) {
    const arr = [];
    for (let i = 0; i < n; i++) {
        const randomNum = Math.floor(Math.random() * (b - a + 1)) + a;
        arr.push(randomNum);
    }
    return arr;
}

const gaps = [5, 3, 1]
const array = generateRandomArray(20, 1, 100);
console.log("Исходный массив:", array);
console.log("Отсортированный:", shellSort(array, gaps));
