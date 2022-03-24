let firstName, lastName, fullName;
let flag = false;

const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;


firstName = prompt('Enter your first name');
lastName = prompt('Enter your last name');

for (let index = 0; index < firstName.length; index++) {
    let element = firstName[index];
    if(!isNaN(element)){
        flag = true;
    }
}
if(specialChars.test(firstName)) {
    flag = true;
}

for (let index = 0; index < lastName.length; index++) {
    let element = lastName[index];
    if(!isNaN(element)){
        flag = true;
    }
}
if(specialChars.test(lastName)) {
    flag = true;
}

if(flag) {
    console.log('Wrong input!');
    alert('Wrong input!');
} else {
    fullName = firstName[0].toUpperCase() + firstName.substr(1, firstName.length).toLowerCase();
    fullName += ' ' + lastName[0].toUpperCase() + lastName.substr(1, lastName.length).toLowerCase();
    console.log(fullName);
    alert(fullName);
}