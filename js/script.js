window.addEventListener("DOMContentLoaded", function () {
  //clock

  const clock = document.querySelector(".timer");

  const updateClock = () => {
    const time = new Date();
    const hours = time.getHours();
    const minutes = addZero(time.getMinutes());
    clock.textContent = `${hours}:${minutes}`;
  };

  function addZero(num) {
    if (num < 10) {
      return "0" + num;
    } else {
      return num;
    }
  }

  const clockStart = () => {
    setInterval(updateClock, 1000);
  };

  clockStart();
  updateClock();

  //burger menu

  // const menu = document.querySelector(".fa-bars");
  // const cross = document.querySelector(".fa-times");
});
