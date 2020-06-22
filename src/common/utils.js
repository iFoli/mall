export function  debounce(func, delay) {
  let timer = null;

  return function(...args) {
    if (timer) clearInterval(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

export function formatTime(date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')

}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
