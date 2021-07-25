# ASKL

ASKL (pronounced 'ASKULL') is a beat-saber inspired game where a user has 4 sabers to control with the keys 'A S K L'. A randomly selected song will play and the user will have to hit the right key combinations that match the beat of the song to earn points. Users can be on a continuous point streak for not missing a beat. The rules are simple. Start the song, hit the right keys and make it to the end. Too many mistakes and you will have to restart. 

# Functionality

In ASKL, users will be able to:


* Select a song from a list or be given a random song to play to
* Start the game and use the ASKL keys to hit the right letter combinations
* Earn a local high score for their session (perhaps a global highscore board as well?)
* Pause, resume, and restart the game or return to the main menu

In addition, this project will include:

* A prompt with instructions 
* Production README


# Wireframe
![image](https://cdn.discordapp.com/attachments/780245510996230175/868931648174034956/unknown.png)

* Main menu to select random song or choose a song

![image](https://cdn.discordapp.com/attachments/780245510996230175/868931691446669342/unknown.png)

* Score on top left
* Streak on top right
* Current song playing on bottom right
* Pause button underneath streak
* Player at bottom of screen with 4 sabers
* Incoming obstacles to hit with corresponding key on keyboard


# Technologies
 Besides basic vanilla JS, HTML, and CSS, Three.js will be used to render the game itself. 
 The Web Audio API will be used to determine the beats per minute for a song to determine how to generate combos for the user to hit.
 NPM will be used to handle the packages used for the project, as well as webpack and babel for transpiling the JS code. 

# Implementation Timeline

* Weekend: 
  * Research of technology/planning 

* Monday:
  * Input detection of keys and matching key hit with incoming obstacle
  * Work with ThreeJS to begin rendering obstacles and track with player
* Tuesday:
  * Using Web Audio API to obtain beats per minute of a song
  * UI work for start/pause menu to implement song selection
  
* Wednesday:
  * Getting model to interact with key inputs

* Thursday:
  * Getting obstacles to come down the track at the rate of beats per minute and begin trying to correlate beat swings with obstacle hits
* Friday
  * Tying it all together to get a basic demo working