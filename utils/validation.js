function validation(url) {
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i
    return urlRegex.test(url)
}


module.exports = validation