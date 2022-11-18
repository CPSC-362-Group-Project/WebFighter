document.getElementById('background').addEventListener('click', function (event) {
    localStorage.setItem("stage_selection", "1");
  })

document.getElementById('background_1').addEventListener('click', function (event) {
  localStorage.setItem("stage_selection", "2");
})

document.getElementById('background_2').addEventListener('click', function (event) {
  localStorage.setItem("stage_selection", "3");
})

document.getElementById('background_3').addEventListener('click', function (event) {
  localStorage.setItem("stage_selection", "4");
})