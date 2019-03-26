function playsound(e) {
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);


if(!audio) return; // Stop the audio
audio.currentTime = 0; // Rewind the audio when pressed again and again
audio.play(); // To play the audio
key.classList.add('playing');
}

function removeTrans(e) {
	if(e.propertyName !== 'transform') return; // skip if it is not a transform
	this.classList.remove('playing');
}



const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTrans));
window.addEventListener('keydown', playsound);