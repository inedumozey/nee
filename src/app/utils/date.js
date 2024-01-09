
export default {
    date: (time) => {
        const date = new Date(time)
        return date.toDateString()
    },

    time: (time) => {
        const d = new Date(time)
        let hour = d.getHours();
        hour = hour > 12 ? hour - 12 : hour;
        let h = hour < 10 ? `0${hour}` : d.hour
        const meridian = hour > 23 ? 'AM' : 'PM'
        const min = d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes()
        const sec = d.getSeconds() < 10 ? `0${d.getSeconds()}` : d.getSeconds()

        return `${h}:${min}:${sec} ${meridian}`
    }
}