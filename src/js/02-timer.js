import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

// ////////////////======= бібліотеку import Notiflix from 'notiflix'; не хоче підключати до цього завдання, до 3 завдання підключило успішно!
// Build failed.

// @parcel/core: Failed to resolve 'dist/notiflix-3.2.6.min.css' from './src/02-timer.html'

// @parcel/resolver-default: Cannot load file './dist/notiflix-3.2.6.min.css' in './src'.

// ======////////////

const buttonStart = document.querySelector('button[data-start]');

const dayEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

const disabledButton = buttonStart.setAttribute('disabled', true);

const dataFlatOpt = flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= Date.now()) {
      Notiflix.Report.warning('Please choose a date in the future');
    }
    if (selectedDates[0] >= Date.now()) {
      buttonStart.removeAttribute('disabled');
    } else {
      buttonStart.setAttribute('disabled', true);
    }
    const startTime = selectedDates[0];
    const startTimeInSec = startTime.getTime();

    const buttonClick = buttonStart.addEventListener('click', () => {
      {
        setInterval(() => {
          const currentTime = Date.now();
          const deltaTime = startTimeInSec - currentTime;
          timer(deltaTime);
        }, 1000);
      }
    });
  },
});

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

function timer(deltaTime) {
  const { days, hours, minutes, seconds } = convertMs(deltaTime);
  dayEl.textContent = `${days.toString().padStart(2, '0')}`;
  hoursEl.textContent = `${hours.toString().padStart(2, '0')}`;
  minutesEl.textContent = `${minutes.toString().padStart(2, '0')}`;
  secondsEl.textContent = `${seconds.toString().padStart(2, '0')}`;
}


// ////////////////======= бібліотеку import Notiflix from 'notiflix'; не хоче підключати до цього завдання, до 3 завдання підключило успішно!
// Build failed.

// @parcel/core: Failed to resolve 'dist/notiflix-3.2.6.min.css' from './src/02-timer.html'

// @parcel/resolver-default: Cannot load file './dist/notiflix-3.2.6.min.css' in './src'.

// ======////////////