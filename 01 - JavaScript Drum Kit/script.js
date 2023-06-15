const playSound = (e) => {
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  audio.currentTime = 0;
  if (!audio) {
    return; // this stops the function from running if there's no audio linked to the keyCode
  } else {
    audio.play();
  }
  key.classList.add('playing');
};

function removeTransition(e) {
  if (e.propertyName !== 'transform') {
    return;
  } else {
    this.classList.remove('playing');
  }
}

const keys = document.querySelectorAll('.key');
keys.forEach((key) => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
