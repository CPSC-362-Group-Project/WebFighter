const singlePlayerMode = document.querySelector("#singlePlayer");
const multiPlayerMode = document.querySelector("#multiPlayer");
const timeSettings = document.querySelector("#set-time");
const goBackButton = document.querySelector("#go-back-button");
let timerId

if(singlePlayerMode ) {
    singlePlayerMode.addEventListener("click", () => {
        localStorage.setItem("isSinglePlayer", "true");
        //window.location.href = "canvas.html";
    });
}

if(multiPlayerMode ) {
    multiPlayerMode.addEventListener("click", () => {
        localStorage.setItem("isSinglePlayer", "false");
        // window.location.href = "canvas.html";
    });
}
if(goBackButton) {
    goBackButton.addEventListener("click", () => {
        clearTimeout(timerId);
    })
}


function setupTime() {

    localStorage.setItem("timer", timeSettings.value);
    timerId = setTimeout(setupTime, 1000)
    console.log("current time: ", localStorage.getItem("timer"));
}

if (timeSettings) {
    setupTime()
}




