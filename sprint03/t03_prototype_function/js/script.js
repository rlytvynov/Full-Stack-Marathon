function removeDups(str) {
    if ( ! str ) { str = this; }
    let arr = Array.from(new Set(str.split(' ')));
    let stri = '';
    for (let index = 0; index < arr.length; index++) {
        if(arr[index] === '\'') continue;
        stri += arr[index] + ' ';
    }
    return stri.replace(/\s+/g,' ');
}

String.prototype.removeDuplicates = removeDups;
