var ul = document.getElementById("characters");
var childCounts = ul.childElementCount;
var collection = ul.children;

console.log(childCounts);

for(var i = 0; i < childCounts; i++) {
    if(!collection[i].hasAttributes())  {
        collection[i].setAttribute("class", "unknown");
        collection[i].setAttribute("data-element", "unknown");
    }
    else {
        var x = collection[i].hasAttribute("data-element");
        if(!x) collection[i].setAttribute("data-element", "unknown");
    }

    let arr = collection[i].getAttribute('data-element').split(' ');
    collection[i].insertAdjacentHTML('beforeend', '<br/>');
    arr.forEach(function(item) {
        if (item.length > 0) {
            collection[i].insertAdjacentHTML('beforeend', '<div class="elem ' + item + '">'
                + (item === 'unknown' ? '<div class="line"></div>' : '')
                + '</div>');
        }

    });
}

