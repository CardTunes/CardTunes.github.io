const audio = document.getElementById('audio-engine');
const playPauseBtn = document.getElementById('play-pause-btn');
const progressBar = document.getElementById('progress-bar');



// Toggle between play and pause states
// playPauseBtn.addEventListener('click', () => {
//   if (audio.paused) {
//     audio.play();
//     playPauseBtn.textContent = 'Pause';
//   } else {
//     audio.pause();
//     playPauseBtn.textContent = 'Play';
//   }
// });

// Update the timeline bar smoothly as music plays
// audio.addEventListener('timeupdate', () => {
//   const percentage = (audio.currentTime / audio.duration) * 100;
//   progressBar.style.width = percentage + '%';
// });

class Song {
  constructor(label, url) {
    this.label = label; 
    this.url = url;
    this.state;
    this.percentage = 0;
  }
}

const songList = [];
songList.push(new Song("Gloria's Step", "Gloria's Step.mp3"));
songList.push(new Song("River Man", "River Man.mp3"));

songList.push(new Song("Estatê", "Estate.mp3"));
songList.push(new Song("Unrequited", "Unrequited.mp3"));

songList.push(new Song("I Mean You", "I Mean You.mp3"));
songList.push(new Song("Infant Eyes", "Infant Eyes.mp3"));

const addButton = (song, audio) => {
    const button = document.createElement('button');
    container.appendChild(button);
    
    button.innerHTML = "▶&#xFE0E;";  

    button.classList.add('player-btn');
    button.addEventListener('click', () => {
       
        if(audio.paused) {
            audio.play();
            button.innerHTML = "⏸&#xFE0E";            
        }
        else {
            audio.pause();
            button.innerHTML = "▶&#xFE0E";            
        }
    });

};

var index = 1;
const container = document.getElementById('recordings');

const formatDuration = (audioElement) => {
  if (isNaN(audioElement.duration)) return "00:00";

  const minutes = Math.floor(audioElement.duration / 60);
  const seconds = Math.floor(audioElement.duration % 60);

  const paddedMinutes = String(minutes).padStart(2, '0');
  const paddedSeconds = String(seconds).padStart(2, '0');

  return `${paddedMinutes}:${paddedSeconds}`;
};

songList.forEach(song => {
    const audio = new Audio(song.url);

    const counter = document.createElement('div');
    counter.textContent = index;
    container.appendChild(counter);

    addButton(song, audio);
    
    const label = document.createElement('div');
    label.textContent = song.label;
    label.classList.add('song-title');
    container.appendChild(label);

    const progressContainer = document.createElement('div');
    progressContainer.classList.add('progress-container');
    container.appendChild(progressContainer);

    const progressBar = document.createElement('div');
    progressBar.classList.add('progress-fill');
    progressContainer.appendChild(progressBar);

    audio.addEventListener('timeupdate', () => {
        const percentage = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = percentage + '%';
    });

     const time = document.createElement('div');
     time.classList.add('song-time');
     container.appendChild(time);

    audio.addEventListener('loadedmetadata', () => {
        time.textContent = formatDuration(audio);
  
    });

    index = index + 1;
});
