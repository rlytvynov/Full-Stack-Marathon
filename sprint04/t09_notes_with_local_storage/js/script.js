document.getElementById('add').addEventListener('click', () => addNotes());
document.getElementById('clear').addEventListener('click', () => clearNotes());

let storage = 'localStorage';
renderOutput();

function cookieToArray(cook) {
	let obj = {};
	cook.split('; ').forEach((item, index, array) => {
		obj[item.split('=')[0]] = item.split('=')[1];
	});
	//obj = {куки1: значение, куки2: значение и т.д}
	return Object.entries(obj); // array = [[куки1, значение],[куки2, значение], и т.д.]
}

function storageToArray(storage) {
	let arr = [];
	for(let i = 0; i < storage.length; i++) {
		let key = storage.key(i);
		arr.push([key, storage.getItem(key)]);
	}
	return arr;
}

function getFormatedDate(dateObject) {
	let res = '';

    res += new Intl.NumberFormat('en-IN', {minimumIntegerDigits: 2}).format(dateObject.getDate()) + '.'
        +  new Intl.NumberFormat('en-IN', {minimumIntegerDigits: 2}).format((dateObject.getMonth() + 1)) + '.' +  (dateObject.getFullYear() - 2000) + ', '
        +  new Intl.NumberFormat('en-IN', {minimumIntegerDigits: 2}).format(dateObject.getHours()) + ':'
        +  new Intl.NumberFormat('en-IN', {minimumIntegerDigits: 2}).format(dateObject.getMinutes()) + ':' + 
		+  new Intl.NumberFormat('en-IN', {minimumIntegerDigits: 2}).format(dateObject.getSeconds());
    return res;
}

function renderOutput() {
	let render = '';
    if(storage === 'cookie') {
		if(document.cookie) {
			console.log(document.cookie);
			cookieToArray(document.cookie).forEach((item, index, key) => {
				render += '--> ' + item[1] + '<br/>';
			});
		} else {
			render += '[Empty]';
		}
		
     } else {
		if (localStorage.length > 0) {
			storageToArray(localStorage).forEach((item, index, key) => {
				render += '--> ' + item[1] + ' [ ' + getFormatedDate(new Date(item[0]* 1)) + ']<br>';
			});
		} else {
			render += '[Empty]';
		}
	}
	document.getElementById('render').innerHTML = render;
}

function addNotes() {
	let textField = document.getElementById('area');
	
	if(textField.value) {
		if(storage === 'cookie') {
			
			document.cookie = Date.now() + '=' + textField.value + '; expires=' + new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

		} else {
			localStorage.setItem(Date.now(), textField.value);
		}	
	} else {
		alert('It\'s empty. Try to input something in "Text input"');
	}
    
	textField.value = '';
    renderOutput();
}

function clearNotes() {
	if(confirm('Are You sure?')) {

	
		if(storage === 'cookie') {
			cookieToArray(document.cookie).forEach((item, index, key) => {
				document.cookie = item[0] + '=1; max-age=-1';
			});
			
		} else {
			localStorage.clear();
		}
	}
    renderOutput();
}
