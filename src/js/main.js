import Countdown from "countdown-js";
import { debounce } from "debounce";
import addZero from "add-zero";
import percentage from "calculate-percentages";
import differenceInMinutes from "date-fns/differenceInMinutes";

/**
 * Constants
 */
const DASH_ARRAY = 100;

const END = new Date("12/06/2021 0:30:00 PM UTC").getTime();
const START = new Date("11/24/2021 0:00:00 AM UTC").getTime();

/**
 * Callbacks
 */
const resizeVideoFactory = (player) => {
  return debounce(() => {
    const playerSize = player.getBoundingClientRect();
    const wrapperSize = player.parentNode.getBoundingClientRect();

    const isFullSize = playerSize.width === wrapperSize.width && playerSize.height === wrapperSize.height;

    if (!isFullSize) {
      player.classList.add("hidden");

      player.width = wrapperSize.width;
      player.height = wrapperSize.height;

      setTimeout(() => {
        player.classList.remove("hidden");
      }, 1);
    }
  }, 100);
};

const toggleComponent = (name) => {
  const componentVideo = document.querySelector("[data-component-video]");
  const componentCountdown = document.querySelector("[data-component-countdown]");

  switch (name) {
    case "data-component-video":
      componentVideo.classList.remove("hidden");
      componentCountdown.classList.add("hidden");
      break;
    case "data-component-countdown":
      componentVideo.classList.add("hidden");
      componentCountdown.classList.remove("hidden");
      break;
    default:
    // do nothing
  }
};

const finish = () => {
  const player = document.querySelector("[data-video-player]");
  const resizeVideo = resizeVideoFactory(player);

  toggleComponent("data-component-video");

  resizeVideo();
  window.addEventListener("resize", resizeVideo);
};

const update = (timeLeft) => {
  Object.keys(timeLeft).forEach((key) => {
    const element = document.querySelector(`[data-value="${key}"]`);
    element.innerHTML = addZero(timeLeft[key]);
  });
};

const progress = () => {
  const bar = document.querySelector("[data-progress-bar]");

  toggleComponent("data-component-countdown");

  const difference = differenceInMinutes(END, START);
  const differenceToday = differenceInMinutes(END, new Date());
  const progress = percentage.calculate(differenceToday, difference);

  bar.style.cssText = `
    stroke-dashoffset: ${progress};
    stroke-dasharray: ${DASH_ARRAY};
  `;
};

const main = () => {
  progress();
  Countdown.timer(END, update, finish);
};

document.addEventListener("DOMContentLoaded", main);
