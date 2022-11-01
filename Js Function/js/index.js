const personNihat = {
    firstname: "Nihat",
    lastname: "Mammedov",
    salary: 200,
};
const personJavad = {
    firstname: "Javad",
    lastname: "Xhaalilov",
    salary: 550,
};

const employees = [personNihat, personJavad];

function forEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i])
    }
}
forEach(employees, function(employee) {
    console.log("employee", employee);
});

function findSalaryAvarage(arr, nameKey, surnameKey, salaryKey) {
    let avarage = 0;
    forEach(arr, function(item) {
        avarage += item[salaryKey];
        console.log("Ad Soyad:", item[nameKey], item[surnameKey]);
    })
    return "Ortalama" + (avarage / arr.length);
}
// findSalaryAvarage(employees, "firstname", "lastnanme", "salary");
console.log(findSalaryAvarage(employees, "firstname", "lastname", "salary"));