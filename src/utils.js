import dayjs from 'dayjs';

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function humanizeEventDate(date, format) {
  return date ? dayjs(date).format(format) : '';
}

function getDuration(timeStart, timeEnd) {

  const ft = dayjs(`2000-01-01 ${timeStart}`);
  const tt = dayjs(`2000-01-01 ${timeEnd}`);
  const mins = tt.diff(ft, 'minutes', true);
  const totalHours = parseInt(mins / 60, 10);
  const totalMins = dayjs().minute(mins).$m;

  if (!totalHours < 1) {
    return `${totalHours} H ${totalMins} MIN`;
  } else {
    return `${totalMins} MIN`;
  }
}


export {getRandomArrayElement, getRandomNumberInRange, humanizeEventDate, getDuration};
