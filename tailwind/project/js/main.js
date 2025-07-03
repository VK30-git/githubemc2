const initApp= () =>{
    const hamburgerBtn=document.getElementById('hamburger-button')
    const mobileMenu=document.getElementById('mobile-menu')
    const toggelMenu= () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
        hamburgerBtn.classList.toggle('toggle-btn')
    }
    hamburgerBtn.addEventListener('click',toggelMenu)
    mobileMenu.addEventListener('click',toggelMenu)
}

document.addEventListener('DOMContentLoaded',initApp)