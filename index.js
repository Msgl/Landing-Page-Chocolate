const toggleNav = () => {
    const nav = document.querySelector(".navbar");
    const navContainer = document.querySelector(".navContainer");
    nav.classList.toggle('responsive');
    navContainer.classList.toggle('responsive');
};