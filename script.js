const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");

yesBtn.addEventListener("click", () => {
    window.location.href = "love.html";
});

noBtn.addEventListener("mouseover", () => {
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
});
