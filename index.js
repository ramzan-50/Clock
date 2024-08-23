
function digClock() {
  const clock = document.getElementById('clock');
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let AmPm = "AM";
  let date = now.getDate();
  let month = now.getMonth() + 1; // Months are 0-based, so add 1
  let year = now.getFullYear();

  if (hours > 12) {
    hours = hours - 12;
    AmPm = "PM";
  }

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  date = date < 10 ? '0' + date : date;
  month = month < 10 ? '0' + month : month;

  clock.textContent = 
  `${date}/${month}/${year}
  ${hours}:${minutes}:${seconds} ${AmPm}`;
}

setInterval(digClock, 1000);