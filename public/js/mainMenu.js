var liInMainMenu = document.querySelectorAll(".mainMenu li")
var nameIconSelected = "homeIcon"

liInMainMenu.forEach(function (li) {
    li.addEventListener('click', function () {
        // remove class active in current icon selected
        document.querySelector(`.mainMenu .${nameIconSelected} svg`).classList.remove('active')
        // add new class active
        nameIconSelected = li.getAttribute('id')
        changeIconSelected()
    })
})

function changeIconSelected() {
    var svgSelected = document.querySelector(`.mainMenu .${nameIconSelected} svg`)
    svgSelected.classList.add('active')
}

changeIconSelected()