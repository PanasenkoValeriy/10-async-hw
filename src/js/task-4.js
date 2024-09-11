document.addEventListener('DOMContentLoaded', function () {
  function startTimer() {
    const timeInput = document.getElementById('timeInput').value;

    if (timeInput > 0) {
      const timeInMilliseconds = timeInput * 1000;

      document.getElementById('message').textContent = 'Таймер запущено';

      setTimeout(() => {
        document.getElementById('message').textContent = 'Час вийшов';
      }, timeInMilliseconds);
    } else {
      document.getElementById('message').textContent =
        'Будь ласка, введіть коректний час.';
    }
  }
  window.startTimer = startTimer;
});
