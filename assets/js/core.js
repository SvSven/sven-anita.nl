const formats = ['years', 'months', 'days', 'hours', 'minutes', 'seconds'];

const timerId = countdown(new Date('2018-10-08 15:30'), function(ts) {
    for (let [key, value] of Object.entries(ts)) {
        if(formats.includes(key)) {
            document.getElementById(key).innerHTML = value + ' ' + key;
        }
    }
}, countdown.YEARS|countdown.MONTHS|countdown.DAYS|countdown.HOURS|countdown.MINUTES|countdown.SECONDS);
