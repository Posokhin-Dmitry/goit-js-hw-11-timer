const daysContent = document.querySelector('span[data-value="days"]')
const hoursContent = document.querySelector('span[data-value="hours"]')
const minsContent = document.querySelector('span[data-value="mins"]')
const secsContent = document.querySelector('span[data-value="secs"]')

// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// })

// const finishDate = new Date('Dec 31, 2021')

// function start() {
//   setInterval(() => {
//     let dateNow = Date.now()
//     let time = finishDate - dateNow
//     const days = String(Math.floor(time / (1000 * 60 * 60 * 24))).padStart(3, '-')
//     const hours = String(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0')
//     const mins = String(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0')
//     const secs = String(Math.floor((time % (1000 * 60)) / 1000)).padStart(2, '0')

//     insertData(daysContent, days)
//     insertData(hoursContent, hours)
//     insertData(minsContent, mins)
//     insertData(secsContent, secs)

//     function insertData(content, value) {
//       content.textContent = value
//     }
//   }, 1000)
// }
// start()

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.refs = {
      clockDays: document.querySelector(`${selector} [data-value="days"]`),
      clockHours: document.querySelector(`${selector} [data-value="hours"]`),
      clockMins: document.querySelector(`${selector} [data-value="mins"]`),
      clockSecs: document.querySelector(`${selector} [data-value="secs"]`),
    }

    this.start(targetDate)
  }

  getTimeComponents(time) {
    const days = String(Math.floor(time / (1000 * 60 * 60 * 24))).padStart(3, '-')
    const hours = String(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0')
    const mins = String(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0')
    const secs = String(Math.floor((time % (1000 * 60)) / 1000)).padStart(2, '0')

    return { days, hours, mins, secs }
  }

  updateDate({ days, hours, mins, secs }) {
    this.refs.clockDays.textContent = `${days}`
    this.refs.clockHours.textContent = `${hours}`
    this.refs.clockMins.textContent = `${mins}`
    this.refs.clockSecs.textContent = `${secs}`
  }

  start(targetDate) {
    setInterval(() => {
      this.updateDate(this.getTimeComponents(targetDate - Date.now()))
    }, 1000)
  }
}

const timer1 = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 31, 2021'),
})
