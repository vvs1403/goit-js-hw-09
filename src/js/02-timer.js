import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  inputField: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector(`button[data-start]`),
  daysField: document.querySelector(`span[data-days]`),
  hoursField: document.querySelector(`span[data-hours]`),
  minutesField: document.querySelector(`span[data-minutes]`),
  secondsField: document.querySelector(`span[data-seconds]`),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);
    // console.log(selectedDates[0].getTime());
    if (selectedDates[0].getTime() - Date.now() <= 0) {
      Notiflix.Notify.failure('Выберите, пожалуйста, будущую дату !');
      return;
    } else {
      refs.startBtn.removeAttribute('disabled');
    }

    localStorage.setItem(
      'choosedDate',
      JSON.stringify(selectedDates[0].getTime())
    );
  },
};

const backTimer = {
  intervalID: null,

  startTimer() {
    refs.startBtn.setAttribute('disabled', true);
    refs.inputField.disabled = true;

    const deadline = JSON.parse(localStorage.getItem('choosedDate'));

    this.intervalID = setInterval(() => {
      const deltaTime = deadline - Date.now();

      const { days, hours, minutes, seconds } = convertMs(deltaTime);

      updateTimerCell(days, hours, minutes, seconds);

      if (
        days === `00` &&
        hours === `00` &&
        minutes === `00` &&
        seconds === `00`
      ) {
        clearInterval(this.intervalID);
        Notiflix.Notify.success('Д Е Д Л А Й Н    Н А С Т У П И Л  !!!');
        refs.inputField.disabled = false;
      }
    }, 1000);
  },
};

flatpickr('#datetime-picker', options);

refs.startBtn.addEventListener(`click`, backTimer.startTimer);

function addLeadingZero(value) {
  return String(value).padStart(2, `0`);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );
  return { days, hours, minutes, seconds };
}

function updateTimerCell(days, hours, minutes, seconds) {
  refs.daysField.textContent = days;
  refs.hoursField.textContent = hours;
  refs.minutesField.textContent = minutes;
  refs.secondsField.textContent = seconds;
}
