window.addEventListener("DOMContentLoaded", function () {
  //clock

  const clock = document.querySelector(".timer");

  const updateClock = () => {
    const time = new Date();
    const hours = addZero(time.getHours());
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

  //buttons
  const btns = document.querySelectorAll("i");
  const search = document.querySelector("input[data-attribute='search']");
  const cross = document.querySelector(".fa-times");

  function clearSearch(btn) {
    btn.addEventListener("click", () => {
      search.value = "";
    });
  }

  function seacrhValue(value) {
    value.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        switch (e.target.className) {
          case "fa fa-bus":
            search.value = "BUS";
            break;
          case "fa fa-taxi":
            search.value = "TAXI";
            break;
          case "fa fa-train":
            search.value = "TRAIN";
            break;
          case "fa fa-plane":
            search.value = "PLANE";
            break;
          case "fa fa-amazon":
            search.value = "AMAZON";
            break;
          case "fa fa-twitter":
            search.value = "TWITTER";
            break;
          case "fa fa-facebook":
            search.value = "FACEBOOK";
            break;
        }
      });
    });
  }

  //Calendar

  const calendar = document.querySelector("#calendar");
  const currentDate = document.querySelector(".calendar");
  const date = document.querySelector(".fa-calendar");

  date.addEventListener("click", () => {
    currentDate.classList.toggle("hide");
  });

  function currenrData(caledarCurrenDate) {
    const date = new Date();
    const yaer = date.getFullYear();
    const month = addZero(date.getMonth() + 1);
    const day = addZero(date.getDay());
    const curren = `${yaer}-${month}-${day}`;
    caledarCurrenDate.value = curren;
  }

  //burger menu

  const menu = document.querySelector(".fa-bars");

  currenrData(calendar);
  clearSearch(cross);
  seacrhValue(btns);
  clockStart();
  updateClock();
});
