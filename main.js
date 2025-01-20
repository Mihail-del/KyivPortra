document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById("header");
    const logo = document.getElementById("header-logo");
    const menu = document.getElementById("inline-header-menu");
    const drop = document.getElementById("dropdown-header-menu-child");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 0) {
            header.style.height = "10vh"
            logo.style.fontSize = "24px"
        } else {
            header.style.height = "20vh"
            logo.style.fontSize = "36px"
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    // Select the close button and the dropdown menu container
    const closeButton = document.querySelector('.dropdown-menu-header-close');
    const dropdownMenu = document.querySelector('#dropdown-header-menu-child');
    const dropdownHeaderMenu = document.querySelector('.dropdown-header-menu-btn');

    // Check if elements exist
    if (closeButton && dropdownMenu && dropdownHeaderMenu) {
        // Add a click event listener to the close button
        closeButton.addEventListener('click', () => {
            // Change the display style of the dropdown menu to "none"
            dropdownMenu.style.display = 'none';
        });

        // Add a click event listener to the dropdown header menu button
        dropdownHeaderMenu.addEventListener('click', () => {
            // Change the display style of the dropdown menu to "flex"
            dropdownMenu.style.display = 'flex';
        });
    } else {
        console.error('Required elements not found in the DOM.');
    }
});

