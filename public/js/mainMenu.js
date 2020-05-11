var listLi = document.querySelectorAll(".mainMenu li")
var nameIconSelected = "home"

var currentHash = 'homeSite'
var currentSite = document.getElementById(currentHash)
currentSite.classList.add('showSite')
window.location.hash = 'homeSite'

listLi.forEach(function (li) {
    li.addEventListener('click', function () {
        // remove class active in current icon selected
        document.querySelector(`.mainMenu #${nameIconSelected} svg`).classList.remove('active')

        // add new class active
        nameIconSelected = li.getAttribute('id')
        changeIconSelected()

        // setting
        currentHash = window.location.hash.slice(1)
        currentHash = currentHash === 'homeSite' ? 'homeSite' : currentHash + 'Site'
        currentSite = document.getElementById(currentHash)

        // remove class showSite
        currentSite.classList.remove('showSite')

        // add class showSite
        var nowSite = document.getElementById(nameIconSelected + 'Site')
        nowSite.classList.add('showSite')

        // add class active to last span
        var spanClicked = li.querySelector('a span:last-child')
        if (spanClicked.classList.contains('active')) {
            var currentSpanSelected = document.getElementById(nameIconSelected).querySelector('a span:last-child')
            console.log(currentSpanSelected);

            currentSpanSelected.classList.remove('active')
        } else {
            spanClicked.classList.add('active')
        }

        // menuToggle
        activeToggle() // from menuToggle.js
    })
})

function changeIconSelected() {
    var svgSelected = document.querySelector(`.mainMenu #${nameIconSelected} svg`)
    svgSelected.classList.add('active')
}

changeIconSelected()