let count = 0;
const maxMessages = 5;

let timerId = setInterval(() => {
  count++;

  console.log(`Повідомлення номер ${count}`);
  if (count === maxMessages) {
    clearInterval(timerId);
    console.log('Повідомлення зупинено');
  }
}, 1000);
