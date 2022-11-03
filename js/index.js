
let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let musicPlayer;


//play youtube video embedded in Iframe tag in the background
function onYouTubeIframeAPIReady() {
  musicPlayer = new YT.Player('youtube-video', {
    events: {
      'onReady': onPlayerReady,
    }
  });
}

function onPlayerReady() {
  musicPlayer.loadPlaylist(['p56XUPetIAQ', '7FPjMy6crU8', 'aTuE4BROrjA']);
}




//on start button even click to switch to the canvas view music will play
// document.getElementById("mute").addEventListener('click', function(event) {
//   console.log(musicPlayer);

//   //check if mute button is muted or not
//   if (musicPlayer.isMuted()) {
//     musicPlayer.unMute();
//   } else {
//     musicPlayer.mute();
//   }
// });

// code for the music controller
document.getElementById("prevSong").addEventListener('click', function(event){
  // if current song is at least the second song, can go back
  if(musicPlayer.getPlaylistIndex() > 0)
  {
    musicPlayer.previousVideo();
    console.log("Previous Song");
  }
});

document.getElementById("playSong").addEventListener('click', function(event){
  // if music player is paused, play
  //if(musicPlayer.getPlayerState() == 2)
  //{
    musicPlayer.playVideo();
    console.log("Play Song");
  //}
});

document.getElementById("pauseSong").addEventListener('click', function(event){
  // if the music player is playing, pause
  //if(musicPlayer.getPlayerState() == 2)
  //{
    musicPlayer.pauseVideo();
    console.log("Pause Song");
  //}
});

document.getElementById("nextSong").addEventListener('click', function(event){
  // if current video isn't last in the playlist, go next
  if(musicPlayer.getPlaylistIndex() < musicPlayer.getPlaylist().length)
  {
    musicPlayer.nextVideo();
    console.log("Next Song");
  }
});
//test