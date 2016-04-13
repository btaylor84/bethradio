MusicPlayer = require('musicplayer-api').MusicPlayer;
 
//# The constructor automatically creates a new AudioContext 
//# and GainNode 
player = new MusicPlayer();
 
//# The addTrack is responsible of inserting songs in the 
//# playlist. It also asynchronously loads songs into memory 
player.addTrack('http://75.102.43.194:80/kwmu1');
 
player.play();
