function date(time) {
    const date = new Date(time)
    return date.toDateString()
}
module.exports = date;