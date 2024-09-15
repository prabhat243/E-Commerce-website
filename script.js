let body= document.querySelector('body')
let signInBox= document.querySelector('.sign-in-box')
let signInContainer= document.querySelector('.sign-in-container')

function hideBox(){
    signInContainer.style.display='none'
    document.body.style.overflow='auto'
    window.location.reload()
}

function showBox(){
    signInContainer.style.display='flex'
    document.body.style.overflow='hidden'
}