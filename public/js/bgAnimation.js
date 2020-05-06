function bgAni() {
    var bgAni = document.getElementById('bgAni')
    bgAni.addEventListener('mousemove', function (event) {
        var moveX = (event.pageX * -1 / 30)
        var moveY = (event.pageY * -1 / 30)
        bgAni.style.backgroundPosition = moveX + 'px ' + moveY + 'px'
    })
}

bgAni()