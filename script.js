const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");

// Move "No" button when hovered
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 50);
    const y = Math.random() * (window.innerHeight - 50);
    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Redirect to the second page when "Yes" is clicked
yesBtn.addEventListener("click", () => {
    window.location.href = "love.html";
});
