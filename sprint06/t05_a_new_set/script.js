function clearAll() {
    var toClean = document.getElementsByClassName('fields')
    for (let i = 0; i < toClean.length; i++) {
        toClean[i].value = '';
    }
    document.getElementById('file').value = ''
}

function sendInfo() {
    let toSend = document.getElementsByClassName('fields')
    let heroPhoto = document.getElementById('file').value
    let heroPhotoText = ''
    for (let i = 0; i < heroPhoto.length; i++) {
        if(heroPhoto[i]==='\\' || heroPhoto[i]==='/') {
            heroPhotoText = ''
            i++;
        } 
        heroPhotoText+=heroPhoto[i]
    }
    let data = { 
        name: toSend.name.value,
        email: toSend.email.value,
        age: toSend.age.value,
        bio: toSend.bio.value,
        photo: heroPhotoText
    };
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
        let div = document.getElementById('result');
        div.innerHTML = `
        POST<br><br>
        Array<br>
        (<br>
        &nbsp;&nbsp;&nbsp;&nbsp;[name] => ${resJson.name}<br>
        &nbsp;&nbsp;&nbsp;&nbsp;[email] => ${resJson.email}<br>
        &nbsp;&nbsp;&nbsp;&nbsp;[age] => ${resJson.age}<br>
        &nbsp;&nbsp;&nbsp;&nbsp;[description] => ${resJson.bio}<br>
        &nbsp;&nbsp;&nbsp;&nbsp;[photo] => ${resJson.photo}<br>
        )
        `
    });
    clearAll()
}