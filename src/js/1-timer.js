
import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";

flatpickr(element, {});

input[type = "text"];
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

//Вибір дати

//Метод
onClose() ///з об'єкта параметрів викликається щоразу під час закриття елемента інтерфейсу, який створює flatpickr. Саме в ньому варто обробляти дату, обрану користувачем. Параметр selectedDates — це масив обраних дат, тому ми беремо перший елемент selectedDates[0].

//Тобі ця обрана дата буде потрібна в коді і поза межами цього методу onClose(). Тому оголоси поза межами методу let змінну, наприклад, userSelectedDate, і після валідації її в методі onClose() на минуле/майбутнє запиши обрану дату в цю let змінну.

//Якщо користувач вибрав дату в минулому, покажи window.alert() з текстом "Please choose a date in the future" і зроби кнопку «Start» не активною.
//Якщо користувач вибрав валідну дату (в майбутньому), кнопка «Start» стає активною.
//Кнопка «Start» повинна бути неактивною доти, доки користувач не вибрав дату в майбутньому. Зверни увагу, що при обранні валідної дати, не запуску таймера і обранні потім невалідної дати, кнопка після розблокування має знову стати неактивною.
//Натисканням на кнопку «Start» починається зворотний відлік часу до обраної дати з моменту натискання.
//Відлік часу

//Натисканням на кнопку «Start» скрипт повинен обчислювати раз на секунду, скільки часу залишилось до вказаної дати, і оновлювати інтерфейс таймера, показуючи чотири цифри: дні, години, хвилини і секунди у форматі xx:xx:xx:xx.
//
//Кількість днів може складатися з більше, ніж двох цифр.
//Таймер повинен зупинятися, коли дійшов до кінцевої дати, тобто залишок часу дорівнює нулю 00:00:00:00.
//НЕ БУДЕМО УСКЛАДНЮВАТИ Якщо таймер запущений, для того щоб вибрати нову дату і перезапустити його — необхідно перезавантажити сторінку.
//
//Для підрахунку значень використовуй готову функцію convertMs, де ms — різниця між кінцевою і поточною датою в мілісекундах.

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

//Форматування часу

//Функція
convertMs(); //повертає об'єкт з розрахованим часом, що залишився до кінцевої дати. Зверни увагу, що вона не форматує результат. Тобто якщо залишилося 4 хвилини або будь-якої іншої складової часу, то функція поверне 4, а не 04. В інтерфейсі таймера необхідно додавати 0, якщо в числі менше двох символів. Напиши функцію, наприклад addLeadingZero(value), яка використовує метод рядка [padStart()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart) і перед відмальовуванням інтерфейсу форматує значення.

iziToast.show({
    title: 'Hey',
    message: 'What would you like to add?'
});