let $$ = (target, context) => (context || document).querySelectorAll(target);
let timerInterval;
let updateDisplay = sec => {
    clearInterval(timerInterval);
    $$('.display__time-left')[0].innerHTML = '';
    $$('.display__end-time')[0].innerHTML = '';
    timerInterval = setInterval(()=>{
        if(sec<=0) clearInterval(timerInterval);
        let current = new Date();
        let h = Math.floor(sec / 3600);
        let m = Math.floor(sec % 3600 / 60);
        let s = sec % 60;
        let fm = (current.getMinutes() + m) % 60;
        let fh = (current.getHours() + Math.floor((current.getMinutes() + m) / 60)) % 24;
        document.title = `${h} : ${m} : ${s}`;
        $$('.display__time-left')[0].innerHTML = `${h} : ${m} : ${s}`;
        $$('.display__end-time')[0].innerHTML = `${fh} : ${fm}`;
        sec--;
    }, 1000)
}

[].forEach.call($$('.timer__button'), function(ele) {
    ele.addEventListener('click', e => {
        updateDisplay(Number(ele.getAttribute('data-time')));
    }, false)
})

document.customForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const _secs = this.minutes.value * 60;
  updateDisplay(_secs);
});