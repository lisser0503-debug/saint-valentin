const btnNon = document.getElementById('btnNon');
const btnOui = document.getElementById('btnOui');
const successMsg = document.getElementById('successMsg');
const buttons = document.querySelector('.buttons');

btnNon.addEventListener('mouseenter', function() {
    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100;
    
    this.style.transform = `translate(${randomX}px, ${randomY}px) scale(0.9)`;
    
    setTimeout(() => {
        this.style.transform = '';
    }, 500);
});

btnOui.addEventListener('click', function() {
    buttons.style.display = 'none';
    successMsg.style.display = 'block';
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            createConfetti();
        }, i * 30);
    }
});

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.background = ['#d91b5c', '#e74c8c', '#ff69b4', '#ffc0cb'][Math.floor(Math.random() * 4)];
    confetti.style.width = Math.random() * 10 + 5 + 'px';
    confetti.style.height = confetti.style.width;
    document.body.appendChild(confetti);
    
    setTimeout(() => {
        confetti.remove();
    }, 3000);
}