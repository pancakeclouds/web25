function shake() {
    flip()
    var fortune = get_a_fortune()
    display_fortune(fortune)
}

function flip() {
    //no animation yet
}

function get_a_fortune() {

    let fortunes = ["yes!", "nope.", "maybe?", "definitely", "ask again later 🥱", "most likely", "not likely", "outlook not so good..."]
    let random_index = randInt(fortunes.length)
    return fortunes[random_index]
}

function randInt(length) {
    let r = Math.random()
    let br = r * length
    let index = Math.floor(br)
    return index
}

function display_fortune(fortune) {
    alert(fortune)
}