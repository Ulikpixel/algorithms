const numbers = Array(100).fill(0).map((_, idx) => idx + 1);
const target = 77;

const simpleSearch = (target, list) => {
    if (!target || !list || list.length === 0) return null;

    for (let index = 0; index < list.length; index++) {
        if (list[index] === target) {
            return { answer: list[index], attempts: index + 1 };
        }
    }

    return null;
};

export const binarySearch = (target, list) => {
    if(!target || !list || list.length === 0) return null;

    let left = 0;
    let right = list.length - 1;
    let attempts = 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        attempts++

        if(list[mid] === target) {
            return { answer: list[mid], attempts };
        } else if(target > list[mid]) {
            left = mid;
        } else {
            right = mid;
        }
    }

    return null;
}

console.log(simpleSearch(target, numbers));
console.log(binarySearch(target, numbers));