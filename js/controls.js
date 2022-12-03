const singlePlayerMode = document.querySelector("#singlePlayer");
const multiPlayerMode = document.querySelector("#multiPlayer");
const timeSettings = document.querySelector("#set-time");
const goBackButton = document.querySelector("#go-back-button");

const easyMode = document.querySelector("#easy");
const mediumMode = document.querySelector("#medium");
const hardMode = document.querySelector("#hard");
const insaneMode = document.querySelector("#insane");
const impossibleMode = document.querySelector("#impossible");


let timerId


singlePlayerMode.addEventListener("click", () => {
    localStorage.setItem("isSinglePlayer", "true");
    //window.location.href = "canvas.html";
});


multiPlayerMode.addEventListener("click", () => {
    localStorage.setItem("isSinglePlayer", "false");
    // window.location.href = "canvas.html";
});


goBackButton.addEventListener("click", () => {
    clearTimeout(timerId);
})



function setupTime() {

    localStorage.setItem("timer", timeSettings.value);
    timerId = setTimeout(setupTime, 1000)
    console.log("current time: ", localStorage.getItem("timer"));
}

if (timeSettings) {
    setupTime()
}

easyMode.addEventListener("click", () => {
    localStorage.setItem("difficulty", "easy");
})

mediumMode.addEventListener("click", () => {
    localStorage.setItem("difficulty", "medium");
})

hardMode.addEventListener("click", () => {
    localStorage.setItem("difficulty", "hard");
})

insaneMode.addEventListener("click", () => {
    localStorage.setItem("difficulty", "insane");
})

impossibleMode.addEventListener("click", () => {
    localStorage.setItem("difficulty", "impossible");
})


