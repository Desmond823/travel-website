const picInfos = document.querySelectorAll(".pic-info");

// Function to update the displayed image information
function updateImageInfo(index) {
    // Hide all .pic-info elements
    picInfos.forEach(info => {
        info.style.display = "none";
    });

    // Show the .pic-info element corresponding to the current slide index
    if (picInfos[index]) {
        picInfos[index].style.display = "block";
    }
}

// Event listeners for the previous and next buttons
document.querySelector(".prev").addEventListener("click", () => {
    updateImageInfo(slideIndex); // Update info when prev button is clicked
});

document.querySelector(".next").addEventListener("click", () => {
    updateImageInfo(slideIndex); // Update info when next button is clicked
});

// Initialize the slider and display the first image's information
document.addEventListener("DOMContentLoaded", () => {
    initalizeSlider(); // Initialize the slider
    updateImageInfo(0); // Display the information for the first image
});