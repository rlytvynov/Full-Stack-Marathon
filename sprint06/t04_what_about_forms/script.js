function sendData() {
    let choise = document.querySelector('input:checked').getAttribute('id');
    let data = { id: choise };
    const promise = fetch("http://localhost:3000", { 
            method: "POST", 
            headers: { "Content-Type": "application/json; charset=UTF-8" },
            body: JSON.stringify(data)
    });

    promise.then(res => {
        if(!res.ok){
            console.error(res)
        } else {
            return res.json();
        }
    }).then(res => {
        resJson = res;
        let p = document.getElementById('answer');
    
        if (resJson.res === 'true') {
            p.textContent = 'You\'re right';
        }
        else {
            p.textContent = 'Shame on you! Go and watch Avengers!';
        }
    });
}