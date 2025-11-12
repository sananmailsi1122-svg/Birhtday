// script.js

// Wait for the whole page to load before running the script
document.addEventListener("DOMContentLoaded", function() {

    // --- 1. Typing Animation ---
    
    // === CUSTOMIZE 7: Change the main "Happy Birthday" text ===
    const text = "Happy Birthday!";
    const typingElement = document.getElementById("birthday-text");
    
    let index = 0;

    function type() {
        if (index < text.length) {
            typingElement.innerHTML += text.charAt(index);
            index++;
            // Adjust the timeout to make typing faster or slower (in milliseconds)
            setTimeout(type, 150); 
        }
    }
    
    // Start the typing animation
    type();

    
    // --- 2. Modal (Pop-up) Logic ---
    
    const modal = document.getElementById("message-modal");
    const button = document.getElementById("message-button");
    const closeButton = document.querySelector(".close-button");

    // When the user clicks the button, show the modal
    button.onclick = function() {
        modal.style.display = "flex"; // Use 'flex' to center it
    }

    // When the user clicks on (x), close the modal
    closeButton.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});