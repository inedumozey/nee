function commonName(name) {
    if (name) {
        const arr = name.split(" ")
        const temp = [];
        for (let i = 0; i < arr.length; i++) {
            const fullname = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase()

            temp.push(fullname)
        }
        return temp.join(" ")
    }
    else {
        return ""
    }
}

module.exports = commonName;