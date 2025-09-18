// Map keys to sounds
const sounds = {
  'a': new Audio('sounds/sound1.mp3'),
  's': new Audio('sounds/sound2.mp3'),
  'd': new Audio('sounds/sound3.mp3'),
  'f': new Audio('sounds/sound4.mp3')
};

document.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();
  if (sounds[key]) {
    sounds[key].currentTime = 0; // restart if pressed fast
    sounds[key].play();

    // funky background effect
    document.body.style.background = 
      `hsl(${Math.random() * 360}, 80%, 50%)`;
  }
});
