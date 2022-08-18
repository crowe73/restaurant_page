import { initialPageLoad } from './initial_page_load.js';
import { menu } from './menu.js';
import { contact } from './contact.js';

//alert("This is my restaurant page!");
initialPageLoad();

// Tab switching module.
let tabSwitchingModule = (function() 
{
    const homeTab = document.querySelector(".home");
    homeTab.addEventListener("click", initialPageLoad);

    const menuTab = document.querySelector(".menu");
    menuTab.addEventListener("click", menu);

    const contactTab = document.querySelector(".contact");
    contactTab.addEventListener("click", contact);
})();