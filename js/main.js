document.addEventListener("DOMContentLoaded", function () {
  const lastUpdateOutput = document.getElementById("last-update");
  const timeOutput = document.getElementById("time");

  const lastUpdate = moment("2019-09-30");

  lastUpdateOutput.innerText = lastUpdate.format("MMMM Do YYYY");

  setInterval(function () {
    let now = moment(new Date());
    let difference = now.diff(lastUpdate);
    let duration = moment.duration(difference);
    timeOutput.innerText =
      duration.years() +
      " years, " +
      duration.months() +
      " months, " +
      duration.days() +
      " days, " +
      duration.hours() +
      " hours, " +
      duration.minutes() +
      " minutes and " +
      duration.seconds() +
      " seconds";
  }, 1000);
});
