const letter = 'abcdefghijklmnopqrstuvwxyz0123456789'

function urlShortener(){
    let result = ''
    let length = letter.length
    for(let i = 0; i < 5; i++){
        let randomNum = Math.floor(Math.random() * length)
        result += letter[randomNum]
    }
    return result
}

module.exports = urlShortener
