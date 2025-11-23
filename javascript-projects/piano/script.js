let pianoContainer = document.querySelector('.piano');
const AUDIOS = {};

function generateSounds() {
  for (let i = 28; i <= 63; i++) {
    let char = String.fromCharCode(37 + i);

    AUDIOS[char] = {
      key: char,
      src: `https://www.musicca.com/files/audio/tools/piano/${i}.mp3`,
      audio: new Audio(`https://www.musicca.com/files/audio/tools/piano/${i}.mp3`),
      div: null,
    };
    AUDIOS[char].audio.load();
  }
}

function generateSwitchs() {
  for (const key in AUDIOS) {
    let div = (AUDIOS[key].div = document.createElement('div'));
    div.classList.add('switch');
    div.textContent = AUDIOS[key].key;
    div.id = `key-${AUDIOS[key].key}`;

    div.addEventListener('pointerdown', function () {
      playAudio(AUDIOS[key].key);
    });
    pianoContainer.appendChild(div);
  }
}

function keyBoardListener() {
  document.addEventListener('keydown', function (event) {
    let soundKey = event.key;
    playAudio(soundKey);
  });
}
function playAudio(soundKey) {
  const sound = AUDIOS[soundKey]
  if (!sound) return
  sound.audio.currentTime = 0
  sound.audio.play()
  highlightKey(sound.div)
}

// ----------------------
function highlightKey(div) {
  if (!div) return;

  requestAnimationFrame(() => {
    div.classList.add('active');
    setTimeout(() => {
      div.classList.remove('active');
    }, 150);
  });
}

function init() {
  generateSounds();
  generateSwitchs();
  keyBoardListener();
}

init();
