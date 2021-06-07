document.addEventListener("DOMContentLoaded", function () {
  const lastUpdateOutput = document.getElementById("last-update");
  const timeOutput = document.getElementById("time");

  const lastUpdate = moment("2019-09-30");

  lastUpdateOutput.innerText = lastUpdate.format("MMMM Do YYYY");

  function pluralize(value, unit) {
    return `${value} ${unit}${value !== 1 ? "s" : ""}`;
  }

  setInterval(function () {
    let now = moment(new Date());
    let difference = now.diff(lastUpdate);
    let duration = moment.duration(difference);
    timeOutput.innerText =
      pluralize(duration.years(), "year") +
      ", " +
      pluralize(duration.months(), "month") +
      ", " +
      pluralize(duration.days(), "day") +
      ", " +
      pluralize(duration.hours(), "hour") +
      ", " +
      pluralize(duration.minutes(), "minute") +
      " and " +
      pluralize(duration.seconds(), "second");
  }, 1000);
});
