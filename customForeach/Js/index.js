const personRovshen = {
    firstname: "Rovshan",
    lastname: "Khalilov",
    salary: 200,
};

const personElnur = {
    firstname: "Elnur",
    lastname: "Azizov",
    salary: 150,
};

const employees = [personRovshen, personElnur];

function forEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i])
    }
}

forEach(employees, function(employee) {
    console.log("emloyee", employee);
});

function findSalaryAvarage(arr, nameKey, surnameKey, salaryKey) {
    let avarage = 0;
    forEach(arr, function(item) {
        avarage += item[salaryKey];
        console.log("Ad Soyad:", item[nameKey], item[surnameKey], item[salaryKey])
    })

    return "Ortalama:" + (avarage / arr.length);
}

console.log(findSalaryAvarage(employees, "firstname", "lastname", "salary"));