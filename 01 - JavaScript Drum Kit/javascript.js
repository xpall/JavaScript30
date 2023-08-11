function playSound(e) {
  const audio = document.querySelector(`audio[key='${e.key}']`);
  const addKey = document.querySelector(`.key[key='${e.key}']`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  addKey.classList.add('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

window.addEventListener('keydown', playSound);