let pianoContainer = document.querySelector('.piano');
const AUDIOS = [];
// ----------------------
// Generating the audios
// ---------------------

for (let i = 28; i <= 63; i++) {
  let char = String.fromCharCode(37 + i);
  let key = {
    key: char,
    src: `https://www.musicca.com/files/audio/tools/piano/${i}.mp3`,
  };
  AUDIOS.push(key);
}

// -----------------------
// Creating clickable divs
// ----------------------

AUDIOS.forEach((sound) => {
  let div = document.createElement('div');

  div.classList.add('switch');
  div.id = sound.key;
  div.textContent = sound.key;

  // Click listener
  div.addEventListener('click', function () {
    playAudio(sound.key);
  });

  pianoContainer.appendChild(div);
});

// --------------
// Audio preload
// --------------

AUDIOS.forEach((sound) => {
  sound.audioObj = new Audio(sound.src);
});

// --------------
// Playing Audio
// --------------

function playAudio(pressedKey) {
  const dot = AUDIOS.find((item) => item.key === pressedKey);

  if (dot) {
    console.log(dot.key);
    console.log(dot.src);

    dot.audioObj.currentTime = 0;
    dot.audioObj.play();
  }
}
// ------------------------------
// 5. Keyboard listener
// ------------------------------

document.addEventListener('keydown', function (e) {
  const pressed = e.key;
  playAudio(pressed);

  let keyDiv = document.getElementById(pressed); // ⭐ WORKS
  if (keyDiv) {
    keyDiv.classList.add('active');

    setTimeout(() => {
      keyDiv.classList.remove('active');
    }, 150);
  }
});
