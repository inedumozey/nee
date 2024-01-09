
export default {
    date: (time) => {
        const date = new Date(time)
        return date.toDateString()
    },

    time: (time) => {
        const d = new Date(time)
        let hour = d.getHours();

        let f_hour
        if (hour == 0) {
            f_hour = 12
        }
        else if (hour > 12) {
            f_hour = hour - 12
        }
        else {
            f_hour = hour
        }

        const h = f_hour < 10 ? `0${f_hour}` : f_hour

        const meridian = hour > 23 ? 'AM' : 'PM'
        const min = d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes()
        const sec = d.getSeconds() < 10 ? `0${d.getSeconds()}` : d.getSeconds()

        return `${h}:${min}:${sec} ${meridian}`
    }
}