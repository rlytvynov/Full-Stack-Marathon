//just tap 2 times and move, i really dont know what's problem


const onClick = function() {
    var mousePosition;
    var offset = [0,0];
    var isDown = false;
    var div = this;
    
    div.addEventListener('mousedown', function(e) {
    isDown = true;
        offset = [
            div.offsetLeft - e.clientX,
            div.offsetTop - e.clientY
        ];
    }, true);
    
    document.addEventListener('mouseup', function() {
        isDown = false;
    }, true);
    
    document.addEventListener('mousemove', function(event) {
        event.preventDefault();
        if (isDown) {
            mousePosition = {
    
                x : event.clientX,
                y : event.clientY
    
            };
            div.style.left = (mousePosition.x + offset[0]) + 'px';
            div.style.top  = (mousePosition.y + offset[1]) + 'px';
        }
    }, true);
}


document.getElementById('sq1').onclick = onClick;
document.getElementById('sq2').onclick = onClick;
document.getElementById('sq3').onclick = onClick;
document.getElementById('sq4').onclick = onClick;
document.getElementById('sq5').onclick = onClick;
document.getElementById('sq6').onclick = onClick;