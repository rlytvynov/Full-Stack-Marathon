const input = document.querySelector("#input");

document.querySelector("#go").addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value) {
        fetch("/photos/?url=" + input.value)
            .then((response) => response.json())
            .then((data) => {
                document.querySelector(
                    "#img"
                ).innerHTML = `
                <tr><td><img src="${data.img[0]}"></td>
                <td><img src="${data.img[1]}"></td></tr>
                <tr><td><img src="${data.img[2]}"></td>
                <td><img src="${data.img[3]}"></td></tr>`;
            });
    }
});