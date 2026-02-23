function shellSort(arr, gaps) {
    const n = arr.length;
    if (gapstest(gaps, n)==false){
        return "Gaps are incorrect, all of them must be lower than lenght of array"
    }

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
function gapstest(gaps, n) {
    for (let i = 0; i< gaps.length; i++){
        if (gaps[i]>= n) {
            return false
        }
    }
    return true
}
function generateRandomArray(n, a, b) {
    const arr = [];
    for (let i = 0; i < n; i++) {
        const randomNum = Math.floor(Math.random() * (b - a + 1)) + a;
        arr.push(randomNum);
    }
    return arr;
}

function generatorGaps(n) {
    const gaps = [];
    let k = n;
    
    while (k>0) {
        const gap = Math.floor(k / 2);
        if (gap >= n) break;
        gaps.push(gap);
        k = gap;
    }
    
    return gaps;
}

function issorted (array) {
    for (let i=0; i<= array.length; i++){
        if (array[i]>array[i+1]){
            return 0
        }
    }
    return 1
}

const gaps = generatorGaps(100)
const array = generateRandomArray(100, 1, 1000);
console.log("Исходный массив:", array);
sortedarray = shellSort(array, gaps)
console.log("gaps:", gaps)
console.log("Отсортированный:", sortedarray);
if (issorted(sortedarray)==1){console.log("массив отсортирован")}
