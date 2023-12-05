document.addEventListener('DOMContentLoaded', () => {
    const car = document.getElementById('car');
    let carPosition = 50; // Initial position

    document.addEventListener('keydown', (event) => {
        if (event.code === 'ArrowLeft' && carPosition > 0) {
            carPosition -= 10;
        } else if (event.code === 'ArrowRight' && carPosition < 90) {
            carPosition += 10;
        }

        car.style.left = carPosition + '%';
    });
});
