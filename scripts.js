import {printItems, addToList} from "./functions.js";

printItems();
const btn = document.querySelector('#buttonAdd');
btn.addEventListener('click', addToList);

$(document).ready(function() {
    $(".js-hide-button").click(function(){
        $(this).parent().parent().toggle(300);
    })
});