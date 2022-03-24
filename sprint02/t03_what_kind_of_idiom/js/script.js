let number, output;

number = prompt('Enter value from 1 to 10');
while (!((Number.isFinite(1*number) && number > 0 && number < 11))) {
    number = prompt('Enter value from 1 to 10');
}

switch(number) {
    case '1':
        output = 'Back to square 1';
        break;
    case '2':
        output = 'Goody 2-shoes';
        break;
    case '3':
        output = "Two's company, three's a crowd";
        break;
    case '4':
        output = 'Counting sheep';
        break;
    case '5':
        output = 'Take five';
        break;
    case '6':
        output = "Two's company, three's a crowd";
        break;
    case '7':
        output = 'Seventh heaven';
        break;
    case '8':
        output = 'Behind the eight-ball';
        break;
    case '9':
        output = 'Counting sheep';
        break;
    case '10':
        output = 'Cheaper by the dozen';
        break;
}

alert(output);