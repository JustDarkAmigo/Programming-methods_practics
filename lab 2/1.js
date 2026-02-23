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
