import Countdown from "countdown-js";
import addZero from "add-zero";
import percentage from "calculate-percentages";
import differenceInMinutes from "date-fns/differenceInMinutes";

/**
 * Constants
 */
const DASH_ARRAY = 100;

const END = new Date("Mon Dec 06 2021 00:00:00").getTime();
const START = new Date("Wed Nov 24 2021 00:00:00").getTime();

/**
 * Callbacks
 */
const finish = () => {
  /**
   * @todo Embed "Dogecoin Billionaire" video.
   */
};

const update = (timeLeft) => {
  Object.keys(timeLeft).forEach((key) => {
    const element = document.querySelector(`[data-value="${key}"]`);
    element.innerHTML = addZero(timeLeft[key]);
  });
};

const progress = () => {
  const bar = document.querySelector("[data-progress-bar]");

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
