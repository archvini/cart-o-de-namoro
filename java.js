const noButton = document.querySelector('#noBtn');
const yesButton = document.querySelector('#yesBtn');
const title = document.querySelector('#title');

function dodge() {
    const horizontalMove = Math.random() * 420 - 300;
    const verticalMove = Math.random() * 270 - 240;

    noButton.style.transform = `translate(${horizontalMove}px, ${verticalMove}px)`;
}

noButton.addEventListener('pointerenter', dodge);
noButton.addEventListener('touchstart', dodge, { passive: true });

yesButton.addEventListener('click', () => {
    title.textContent = 'Siiim!';
    yesButton.textContent = '❤️';
    noButton.remove();
});

const chuva = document.querySelector("#chuva-petalas");

for (let i = 0; i < 30; i++) {
  const petala = document.createElement("span");
  petala.className = "petala";
  petala.style.left = `${Math.random() * 100}vw`;
  petala.style.animationDuration = `${4 + Math.random() * 5}s`;
  petala.style.animationDelay = `${Math.random() * 5}s`;
  chuva.appendChild(petala);
}