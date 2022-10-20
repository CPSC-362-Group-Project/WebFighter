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

canvas.width = 1024
canvas.height = 576
canvas.style = "position: absolute; top: 10px; left: 0px; right: 0px; bottom: 200px; margin: auto; border:4px solid blue";



var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var musicPlayer;


//play yourtube video embedded in Iframe tag in the background
function onYouTubeIframeAPIReady() {
  musicPlayer = new YT.Player('youtube-video', {
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady() {
  console.log("hey Im ready");
  //do whatever you want here. Like, player.playVideo();

 musicPlayer.loadPlaylist(['p56XUPetIAQ', '7FPjMy6crU8', 'aTuE4BROrjA']);

}

//function will change music on player change
function onPlayerStateChange() {
  console.log("my  player state changed");
}


//on start button even click to switch to the canvas view music will play
document.getElementById("mute").addEventListener('click', function(event) {
  console.log(musicPlayer);

  //check if mute button is muted or not
  if (musicPlayer.isMuted()) {
    musicPlayer.unMute();
  } else {
    musicPlayer.mute();
  }
});

// code for the music controller
document.getElementById("prevSong").addEventListener('click', function(event){
  // if current song is at least the second song, can go back
  if(musicPlayer.getPlaylistIndex() > 0)
  {
    musicPlayer.previousVideo();
  }
});

document.getElementById("playSong").addEventListener('click', function(event){
  //if music player is paused, play
  if(musicPlayer.getPlayerState() == 2)
  {
    musicPlayer.playVideo();
  }
});

document.getElementById("pauseSong").addEventListener('click', function(event){
  //if the music player is playing, pause
  if(musicPlayer.getPlayerState() == 1)
  {
    musicPlayer.pauseVideo();
  }
});

document.getElementById("nextSong").addEventListener('click', function(event){
  // if current video isn't last in the playlist, go next
  if(musicPlayer.getPlaylistIndex() < musicPlayer.getPlaylist().length)
  {
    musicPlayer.nextVideo();
  }
});