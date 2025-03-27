const dateContainer = document.getElementById('date');
const date = new Date();
const month = date.toLocaleString('default', { month: 'long' });
const today = date.toLocaleString('default', { weekday: 'long' });
const day = date.getDate();

dateContainer.textContent = `Today is ${today}, ${month} ${day}`;

console.log('HELLLOOOOOOOO!!!');
