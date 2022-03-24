function showPropertiesWeakSet(guestList) {
    let Petya = {name: 'Petya'};
    let Vasya = {name: 'Vasya'};
    let Dasha = {name: 'Dasha'};
    let Roma = {name: 'Roma'};

    guestList.add(Petya);
    guestList.add(Vasya);
    guestList.add(Dasha);
    guestList.add(Vasya);
    guestList.add(Petya);
    guestList.add(Dasha);

    console.log('========================WEAKSET========================');
    console.log('Petya is here? '+ guestList.has(Petya));
    console.log('Roma is here? '+ guestList.has(Roma));
    console.log('How many is here? ' +  'undefined');
    console.log('Vasya Deleted? '+ guestList.delete(Vasya));
    console.log('Roma Deleted? '+ guestList.delete(Roma));
}

function showPropertiesMap(dishes) {
    console.log('==========================MAP==========================');
    dishes.set('перловка', 9);
    console.log('макароны deleted? ' + dishes.delete('макароны'));
    dishes.forEach( (value, key, map) => {
        console.log(`${key}: ${value}`);
    });
    console.log('пшоно available? '+ dishes.has('пшоно'));
    console.log('dishes available: ' + String(dishes.size));
    dishes.clear();
    dishes.forEach( (value, key, map) => {
        console.log(`${key}: ${value}`);
    }); //nothing
}
function showPropertiesWeakMap(bankVault, bankVaults) {
    console.log('========================WEAKMAP========================');
    console.log( bankVault.get(bankVaults[0]) ); // 1
    bankVaults.splice(0, 1); // Вася более не активный пользователь
    console.log(bankVault.get(bankVaults[0]) );
}
function showPropertiesSet(coinCollection) {
    let five = {name: '5'};
    let ten = {name: '10'};
    let twentyFive = {name: '25'};
    let fifty = {name: '50'}
    let seventy = {name: '70'};
    coinCollection.add(five);
    coinCollection.add(ten);
    coinCollection.add(twentyFive);
    coinCollection.add(fifty);
    coinCollection.add(ten);
    coinCollection.add(five);
    console.log('==========================SET==========================');

    console.log('5 deleted? ' + coinCollection.delete(five));
    coinCollection.forEach( coin => console.log(coin.name ) );
    console.log('70 available? '+ coinCollection.has(seventy));
    console.log('coins available: ' + String(coinCollection.size));
    coinCollection.clear();
    coinCollection.forEach( coin => console.log(coin.name ) );
}

let guestList = new WeakSet();
showPropertiesWeakSet(guestList);

let menu = new Map([
    ['борщ', 10],
    ['суп', 12],
    ['макароны',   8],
    ['гречка', 15],
    ['пшоно', 12]
]);
showPropertiesMap(menu);

let bankVaults = [
    {name:  123},
    {name:  321},
    {name:  145},
    {name:  345},
    {name:  1233}
];

let bankVault = new WeakMap([
    [bankVaults[0], 'бедный чел'],
    [bankVaults[1], 'богатый чел'],
    [bankVaults[2], 'дыбилыч'],
    [bankVaults[3], 'должен 2 гривны'],
    [bankVaults[4], 'норм']
]);
showPropertiesWeakMap(bankVault, bankVaults);

let coinCollection = new Set();
showPropertiesSet(coinCollection);