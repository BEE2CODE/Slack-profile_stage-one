const currentDayOfTheWeek = document.querySelector(".currentDayOfTheWeek")
const displayCurrentUtcTime = document.querySelector(".currentUTCTime");

const getDate = () =>{
  const today =new Date();
  const day = today.getDay();
  const dayList = [ "",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursay",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    let dispalyCurrentDay = ("Today is : " + dayList[day])
    currentDayOfTheWeek.textContent = dispalyCurrentDay

    const utcMilliSeconds = Date.now();
    displayCurrentUtcTime.textContent = utcMilliSeconds;
}

getDate();
setInterval(getDate, 1000);













