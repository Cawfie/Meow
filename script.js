const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// Redirect on "Yes" click
yesBtn.addEventListener("click", () => {
    window.location.href = "love.html";
});

// Function to move the "No" button randomly
function moveNoButton() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    let newX = Math.random() * (screenWidth - btnWidth);
    let newY = Math.random() * (screenHeight - btnHeight);

    // Prevent the button from getting stuck on edges
    newX = Math.max(10, Math.min(newX, screenWidth - btnWidth - 10));
    newY = Math.max(10, Math.min(newY, screenHeight - btnHeight - 10));

    noBtn.style.position = "absolute";
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
}

// Apply different event listeners based on device
if ("ontouchstart" in window) {
    // Mobile: Move on touch
    noBtn.addEventListener("touchstart", moveNoButton);
} else {
    // PC: Move on hover
    noBtn.addEventListener("mouseover", moveNoButton);
}
