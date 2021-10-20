# ASKL

ASKL (pronounced 'ASKULL') is a beat-saber inspired game where a user must time and capture incoming cubes with the keys 'A S K L'. The cubes will increase with speed and a user will accumulate points as more cubes are captured. Users can be on a continuous point streak for not missing a beat. Too many mistakes and you will have to restart. 

# Functionality

In ASKL, users will be able to:


* Start the game and use the ASKL keys to hit the right letter combinations
* Earn a local high score for their session 
* Pause, resume, and restart the game or return to the main menu

In addition, this project will include:

* A prompt with instructions 
* Production README



# Technologies
 Besides basic vanilla JS, HTML, and CSS, Canvas will be used to render the game itself. 
 The Web Audio API will be used to determine the beats per minute for a song to determine how to generate combos for the user to hit.
 NPM will be used to handle the packages used for the project, as well as webpack and babel for transpiling the JS code. 

# Implementation Timeline

* Weekend: 
  * Research of technology/planning 

* Monday:
  * Input detection of keys and matching key hit with incoming obstacle
  * Work with Canvas to begin rendering obstacles and track with player
* Tuesday:
  * Using Web Audio API to obtain beats per minute of a song
  * UI work for start/pause menu to implement song selection
  
* Wednesday:
  * Getting model to interact with key inputs

* Thursday:
  * Getting obstacles to come down the track at the rate of beats per minute and begin trying to correlate beat swings with obstacle hits
* Friday
  * Tying it all together to get a basic demo working
