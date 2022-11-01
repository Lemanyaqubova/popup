const personArr = [
    { name: "Bihad", surname: "Mammedov" },
    { name: "Aavad", surname: "Khalilov" },
    { name: "Navad", surname: "Khalilov" }
];

function sort(arr, sortByKeyword) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i][sortByKeyword] > arr[j][sortByKeyword]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
console.log(sort(personArr, "name"));