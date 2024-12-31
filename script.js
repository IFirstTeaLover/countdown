function updateCountdown() {
    const targetDate = new Date('January 1, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display results
    document.getElementById('days').textContent = `${days} Дней`;
    document.getElementById('hours').textContent = `${hours} Часов`;
    document.getElementById('minutes').textContent = `${minutes} Минут`;
    document.getElementById('seconds').textContent = `${seconds} Секунд`;

    // If the countdown is over
    if (distance < 0) {
        clearInterval(interval);
        document.getElementById('countdown').innerHTML = "Новый год!";
    }
}

// Update the countdown every second
const interval = setInterval(updateCountdown, 1000);
