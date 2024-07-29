// custom js file build by JeanDoe

// Show or Hide side bar when side btns (close and menu btn) is toggle

let sideBtn = document.querySelectorAll('.side_btn')
let sideBar = document.querySelector('.sidebar')
let body = document.body


if(sideBtn){
    sideBtn.forEach((btn) =>
    btn.addEventListener('click', () => {
        sideBar.classList.toggle('hide')
        body.classList.toggle('active')
    }))
}

// Enabled and Disabled ligth/Dark Theme when we click on theme btn
// Use item to keep theme as same enevn if the page is load

let themeBtn = document.getElementById('theme-btn')
let darkMode = localStorage.getItem('dark-mode')

const enableDarkMode = () => {
    themeBtn.classList.replace('bx-sun', 'bx-moon')
    body.classList.add('dark')
    localStorage.setItem('dark-mode', 'enabled')
}

const disableDarkMode = () => {
    themeBtn.classList.replace('bx-moon', 'bx-sun')
    body.classList.remove('dark')
    localStorage.setItem('dark-mode', 'disabled')
}

if(darkMode === 'enabled'){
    enableDarkMode()
}

if(themeBtn){
    themeBtn.addEventListener('click', () => {
        let darkMode = localStorage.getItem('dark-mode')
        if(darkMode === 'disabled'){
            enableDarkMode()
        }else{
            disableDarkMode()
        }
    })
}

// hide home container when items are toggle

let home = document.querySelector('.home .home_container')
let iframe = document.querySelector('.home iframe')
let projectItems = document.querySelectorAll('.sidebar .spaces .content a')
let itemTitle = document.querySelector('.home h1')

projectItems.forEach((item) => {
    item.addEventListener('click', () => {
        home.classList.add('hide')
        iframe.classList.add('show')
        itemTitle.textContent = item.textContent;
        iframe.src = item.id
    })
})

//Show or hide spaces when it header is clicked

let spaceHeader = document.querySelector('.sidebar .spaces > a')
let spaceContent = document.querySelector('.sidebar .spaces .content')

if(spaceHeader){
    spaceHeader.addEventListener('click', () => {
        spaceContent.classList.toggle('hide')
        spaceHeader.firstChild.classList.toggle('active');
    })

}