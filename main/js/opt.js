var modal = document.getElementById('id01');
var menu = document.getElementById('floating-menu');

menu.style.display = "none";
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }

}

function change_menu_state() {
    if (menu.style.display === "none" || menu.style.display === " ") {
        menu.style.display = "block";
        console.log("first condtion");
    } else if (menu.style.display == "block") {
        menu.style.display = "none";
        console.log("2nd");
    } else {
        menu.style.display == "block";
        console.log("3rd");
    }
}