var menuToggle = document.getElementById('menuToggle')
var headerSite = document.getElementById("headerSite")

menuToggle.addEventListener('click', function () {
    // menuToggle
    activeToggle()
})

function activeToggle() {
    var listClassMenu = menuToggle.classList
    var isToggleMenu = listClassMenu.contains('openToggle')
    
    if (isToggleMenu) {
        listClassMenu.remove('openToggle')
    } else {
        listClassMenu.add('openToggle')
    }
    
    // header
    var listClassHeader = headerSite.classList
    var isToggleHeader = listClassMenu.contains('openToggle')
    
    if (isToggleHeader) {
        listClassHeader.add('openHeaderSite')
    } else {
        listClassHeader.remove('openHeaderSite')
    }
}