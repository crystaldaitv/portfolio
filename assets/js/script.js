var modal = document.getElementById("myModal");

// Get the button that opens the modal
var schoolBuilding = document.getElementById("btn1");
var birds = document.getElementById("btn2");
var roseStudio = document.getElementById("btn3");
var beautyStudio = document.getElementById("btn4");

// Get the <span> element that closes the modal
var span = document.querySelector(".close");

// When the user clicks the button, open the modal
let openModal = function() {
    modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
let closeModal = function(){
    modal.style.display = "none";
    document.querySelector(".modal-content1").style.display = "none";
    document.querySelector(".modal-content2").style.display = "none";
    document.querySelector(".modal-content3").style.display = "none";
    document.querySelector(".modal-content4").style.display = "none";
};

span.onclick= function() {
    closeModal();
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
};

schoolBuilding.onclick = _ => {
    closeModal();
    openModal();
    document.querySelector(".modal-content1").style.display = "block";
};

birds.onclick = _ => {
    closeModal();
    openModal();
    document.querySelector(".modal-content2").style.display = "block";
};

roseStudio.onclick = _ => {
    closeModal();
    openModal();
    document.querySelector(".modal-content3").style.display = "block";
};

beautyStudio.onclick = _ => {
    closeModal();
    openModal();
    document.querySelector(".modal-content4").style.display = "block";
};