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