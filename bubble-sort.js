const arrayExample = [6, 7, 10, 2, 3, 1];

const bubbleSort = arr => {
    let number = arr.length;
    let swapp;

    do {
        swapp = false;
        for (let i = 0; i < number - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temporary = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temporary;
                swapp = true;
            }
        }
        number--;
    } while (swapp);

    return arr;
};

console.log(bubbleSort(arrayExample));