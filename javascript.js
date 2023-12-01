function getRemainingDays(targetDate) {
    const currentDate = new Date();
    const difference = targetDate - currentDate;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    return days;
}

function updateCountdown() {
    const targetDate = new Date("2023-12-30T18:00:00");
    const remainingDays = getRemainingDays(targetDate);
    document.getElementById("countdown").textContent = `Countdown: ${remainingDays} days`;
}

window.onload = updateCountdown;

setInterval(updateCountdown, 60000);