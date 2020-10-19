import "./css/icons.css";

const clock = document.querySelector(".clock");

clock.querySelectorAll(".nums span").forEach((span, i) => {
  const rad = Math.PI / 6 * i - Math.PI / 2;
  span.style.transform = `translate(-50%, -50%)`
    + `translate(${Math.cos(rad) * 17}px, ${Math.sin(rad) * 17}px) scale(0.7)`;
});

const clockHourHand = clock.querySelector(".hour");
const clockMinuteHand = clock.querySelector(".minute");
const clockSecondHand = clock.querySelector(".second");

requestAnimationFrame(function pass() {
  const date = new Date();
  const seconds = date.getSeconds() + date.getMilliseconds() / 1000;
  const minutes = date.getMinutes() + seconds / 60;
  const hours = date.getHours() + minutes / 60;

  const secondDeg = seconds * 6;
  const minuteDeg = minutes * 6;
  const hourDeg = hours * 30;
  clockSecondHand.style.transform = `translate(-50%) rotate(${secondDeg}deg)`;
  clockMinuteHand.style.transform = `translate(-50%) rotate(${minuteDeg}deg)`;
  clockHourHand.style.transform = `translate(-50%) rotate(${hourDeg}deg)`;
  requestAnimationFrame(pass);
});

const calendar = document.querySelector(".calendar");

const calendarWeek = calendar.querySelector(".week");
const calendarDay = calendar.querySelector(".day");


setInterval(function today() {
  const date = new Date();
  const week = ["일", "월", "화", "수", "목", "금", "토"]

  calendarWeek.textContent = `${week[date.getDay()]}요일`;
  calendarDay.textContent = `${date.getDate()}`;
}, 250);
