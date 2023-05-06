window.addEventListener("DOMContentLoaded", function () {
  //clock

  const clock = document.querySelector(".timer");

  const updateClock = () => {
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    clock.textContent = `${hours}:${minutes}`;
  };

  const clockStart = () => {
    setInterval(updateClock, 1000);
  };

  clockStart();
  updateClock();
});
