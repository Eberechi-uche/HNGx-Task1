const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const greeting = ["Morning", "Afternoon", "Evening"];

const daytime = ["&#x2615;", "&#x2600;&#xFE0F;", "&#x1F311;"];
const date = new Date();
const currentDay = date.getDay();
const dayElement = document.getElementById("day");
dayElement.innerHTML = days[currentDay];
const daytimeIcon = document.getElementById("daytime-icon");
const daytimeCard = document.getElementById("daytime-card");
const timeElement = document.getElementById("time");

function updateCurrentTime() {
  const time = new Date();

  const getHour = time.getHours();
  const formatTime = time.toTimeString();

  if (getHour >= 0 && getHour <= 11) {
    daytimeIcon.innerHTML = daytime[0];
    daytimeCard.classList.add("morning");
    timeElement.innerHTML = formatTime.replace(
      "GMT+0100 (West Africa Standard Time)",
      "Good Morning! "
    );
  } else if (getHour >= 12 && getHour <= 17) {
    daytimeIcon.innerHTML = daytime[1];
    daytimeCard.classList.add("noon");
    timeElement.innerHTML = formatTime.replace(
      "GMT+0100 (West Africa Standard Time)",
      "Good Afternoon! "
    );
  } else {
    daytimeIcon.innerHTML = daytime[2];
    daytimeCard.classList.add("evening");
    timeElement.innerHTML = formatTime.replace(
      "GMT+0100 (West Africa Standard Time)",
      "Good Evening!"
    );
  }
}
updateCurrentTime();
setInterval(updateCurrentTime, 1000);
