const startBtn = document.getElementById('startBtn')

//on start click go to the canvas page window
function gotoCanvasPage(){
    window.location.href = "./canvas.html"
}

//go back button will allow the user to go back to main home screen to
//start a new game
function goBack(){
    window.location.href = "./index.html"
}


var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('youtube-video', {
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady() {
  console.log("hey Im ready");
  //do whatever you want here. Like, player.playVideo();

  player.playVideo();

}

function onPlayerStateChange() {
  console.log("my state changed");
}


document.getElementById("mute").addEventListener('click', function(event) {
  console.log(player);

  //check if mute button is muted or not
  if (player.isMuted()) {
    player.unMute();
  } else {
    player.mute();
  }
});
