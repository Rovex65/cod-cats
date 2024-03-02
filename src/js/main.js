const menuModal = document.getElementById("menuModal");
const openMenuBtn = document.getElementById("openMenuBtn");


const closeMenuBtn = document.querySelector("#menuModal .x-close");


openMenuBtn.addEventListener("click", function() {
  menuModal.style.display = "block"; 
});

const backgroundToggle = document.getElementById("backgroundToggle");
const modalContent = document.querySelector(".modal-content");

backgroundToggle.addEventListener("change", function() {
  if (backgroundToggle.checked) {
    
    modalContent.style.backgroundColor = "#000"; 
  } else {
    modalContent.style.backgroundColor = "#FFF"; 
  }
});

closeMenuBtn.addEventListener("click", function() {
  menuModal.style.display = "none"; 
});
//

window.addEventListener("click", function(event) {
  if (event.target == menuModal) {
    menuModal.style.display = "none"; 
  }
});