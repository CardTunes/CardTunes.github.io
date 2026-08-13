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
songList.push(new Song("Estatê", "Estate.mp3"));
songList.push(new Song("Gloria's Step", "Gloria's Step.mp3"));
songList.push(new Song("I Mean You", "I Mean You.mp3"));

songList.push(new Song("Infant Eyes", "Infant Eyes.mp3"));
songList.push(new Song("River Man", "River Man.mp3"));
songList.push(new Song("Unrequited", "Unrequited.mp3"));


// const addButton = (container, song, audio) => {
//     const button = document.createElement('playButton');
//     container.appendChild(button);
    
//   //  const audio = new Audio(song.url);
//     button.innerHTML = "▶";  

//     button.classList.add('player-btn');
//     button.addEventListener('click', () => {
       
//         if(audio.paused) {
//             audio.play();
//             button.innerHTML = "⏸";            
//         }
//         else {
//             audio.pause();
//             button.innerHTML = "▶";            
//         }
//     });



// };


const addTd = (tr, element, width) => {
    const td = document.createElement('td');
   
    td.appendChild(element);
    tr.appendChild(td);

    if (width !== undefined) {
          td.style.width = width;
    }
   return td;
}

const addButton = (tr, song, audio) => {
    //const td = document.createElement('td');
   //  tr.appendChild(td);

    const button = document.createElement('playButton');
    addTd(tr, button, "20px");
   // td.appendChild(button);
    
    button.innerHTML = "▶";  

    button.classList.add('player-btn');
    button.addEventListener('click', () => {
       
        if(audio.paused) {
            audio.play();
            button.innerHTML = "⏸";            
        }
        else {
            audio.pause();
            button.innerHTML = "▶";            
        }
    });

};

var index = 1;
const container = document.getElementById('playList');
// songList.forEach(song => {
//     const audio = new Audio(song.url);

//     const counter = document.createElement('span');
//     counter.textContent = index;
//     container.appendChild(counter);

//     addButton(container, song, audio);
    
//     const span = document.createElement('span');
//     span.textContent = song.label;
//     container.appendChild(span);

//     const progressContainer = document.createElement('div');
//     progressContainer.classList.add('progress-container');
//     container.appendChild(progressContainer);
//     const progressBar = document.createElement('div');
//     progressBar.classList.add('progress-fill');
//     progressContainer.appendChild(progressBar);

   

//     audio.addEventListener('timeupdate', () => {
//         const percentage = (audio.currentTime / audio.duration) * 100;
//         progressBar.style.width = percentage + '%';
//     });

//     // audio.addEventListener('loadedmetadata', () => {
//     //     const time = document.createElement('span');
//     //     time.textContent = audio.duration;
//     //     container.appendChild(time);
//     //   //  console.log("Audio duration:", audio.duration); // Returns the actual duration in seconds
//     // });

//     index = index + 1;
// });

songList.forEach(song => {
    const audio = new Audio(song.url);

    const row = document.createElement("tr");
    container.appendChild(row);

    // const leftSpan =  document.createElement('span');
    // addTd(row, leftSpan, "50%");

    const counter = document.createElement('span');
    addTd(row, counter, "10px");
    counter.textContent = index;


    addButton(row, song, audio);
    
  //  const labelTd = document.createElement('td');
   // row.appendChild(labelTd);
    const label = document.createElement('span');
    label.textContent = song.label;
    //labelTd.appendChild(label);

    addTd(row, label);

    const emptySpan =  document.createElement('span');
    addTd(row, emptySpan, "10px");

    const progressContainer = document.createElement('div');
    progressContainer.classList.add('progress-container');
    progressTd = addTd(row, progressContainer, "280px");


    const progressBar = document.createElement('div');
    progressBar.classList.add('progress-fill');
     progressContainer.appendChild(progressBar);

    // const rightSpan =  document.createElement('span');
    // addTd(row, rightSpan, "50%");

    audio.addEventListener('timeupdate', () => {
        const percentage = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = percentage + '%';
    });

    // audio.addEventListener('loadedmetadata', () => {
    //     const time = document.createElement('span');
    //     time.textContent = audio.duration;
    //     container.appendChild(time);
    //   //  console.log("Audio duration:", audio.duration); // Returns the actual duration in seconds
    // });

    index = index + 1;
});
