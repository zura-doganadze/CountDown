const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

// We need this to work for every month of every year
let tempData = new Date();
let tempYear = tempData.getFullYear();
let tempMonth = tempData.getMonth();
let tempDay = tempData.getDate();


// let futerData = new Date(2023, 5, 11, 20, 30, 0); This is changing
const futerData = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0)

const year = futerData.getFullYear();
const hours = futerData.getHours();
const minutes = futerData.getMinutes();

let month = futerData.getMonth()
month = months[month];
const date = futerData.getDate();

const weekday = weekdays[futerData.getDay()]

giveaway.textContent = `giveaways ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;



// future time in ms
const furuteTime = futerData.getTime();

function getRemainingTime() {
    const today = new Date().getTime();
    const ta = furuteTime - today;

    // 1s = 1000ms
    // 1min = 60s
    // 1hr = 60min
    // 1d = 24hr

    //values in ms
    const oneDay = 24 * 60 * 60 * 1000
    const oneHour = 60 * 60 * 1000
    const oneMinute = 60 * 1000;
    // calculate all values

    let days = ta / oneDay;
    days = Math.floor(days);
    let hours = Math.floor((ta % oneDay) / oneHour);
    let minutes = Math.floor((ta % oneHour) / oneMinute);
    let seconds = Math.floor((ta % oneMinute) / 1000);
    // set values array;
    const values = [days,hours,minutes,seconds];

    function format(item) {
        if (item < 10) {
            return (item = `0${item}`);
        }
        return item;
    }
    items.forEach(function (item, index) {
        item.innerHTML = format(values[index]);
    });
    if (ta < 0) {
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`;
    }
}
// countdown
let countdown = setInterval(getRemainingTime, 1000)
getRemainingTime();

// const futureTimes = new Date(2023, 5, 25, 11, 30, 0)
// const futureTimess = futureTimes.getTime()
// console.log(futureTimess);





