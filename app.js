const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

// Loop through the sounds array and create a button for each sound
sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.textContent = sound;

    // Add click event to each button
    btn.addEventListener('click', () => {
        stopSongs();
        // play the sound
      document.getElementById(sound).play();  
    });

    // Get buttons container and append the button to it
    document.getElementById('buttons').appendChild(btn);
});

// Stop the sound from playing
function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);
        song.pause();
        // Reset the time to 0, since there is no stop method
        song.currentTime = 0;
    });
}