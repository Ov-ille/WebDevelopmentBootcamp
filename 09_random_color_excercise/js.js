function createRandomNo() { return Math.floor(Math.random() * 255) + 1 }

let body = document.querySelector("body");
let heading = document.querySelector("h1");
document.querySelector("button").addEventListener("click", () => {
    let r = createRandomNo();
    let g = createRandomNo();
    let b = createRandomNo();
    let randomColor = `rgb(${r}, ${g}, ${b})`;
    body.style.backgroundColor = randomColor;
    heading.innerHTML = randomColor;
    if (r + g + b < 200) {
        heading.style.color = "rgb(255, 255, 255)";
    }
})