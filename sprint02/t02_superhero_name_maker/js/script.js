var _animal = new RegExp(/^[a-zA-Z]{1,20}$/);
var _gender = new RegExp(/male|female/i );
var _age = new RegExp(/^[1-9][0-9]{0,4}$/);
var _empty = new RegExp(/^$/);

let animal = prompt('What animal is the superhero most similar to?');

while(!_animal.test(animal)) {
    alert('Error!  length <= 20, only one word that contains only letters');
    animal = prompt('What animal is the superhero most similar to?');
}

let gender = prompt('Is the superhero male or female? Leave blank if unknown or other.');

while(!(_gender.test(gender) || _empty.test(gender))) {
    alert('Error!  accepts only male, female, or blank (not case sensitive)');
    gender = prompt('Is the superhero male or female? Leave blank if unknown or other.');
}

let age = prompt('How old is the superhero?');

while(!_age.test(age)) {
    alert('Error!   length <= 5, only digits, cannot start with a zero');
    age = prompt('How old is the superhero?');
}

let descript

if (gender.toLowerCase() == 'male') {
    if(age >= 18)descript = "-man";
    else descript = "-boy";
} else if (gender.toLowerCase() == 'female') {
    if(age >= 18)descript = "-woman";
    else descript = "-girl";
} else {
    if(age >= 18)descript = "-hero";
    else descript = "-kid";
}

let info = "The superhero name is: " + animal + descript; 

alert(info);

