/**
 * @param {number[]} indices - The reno indices
 * @param {number} length - The length of the race
 * @returns {string} The reno race
 */
function drawRace(indices, length) {
    let race = ""
    let spaces = indices.length - 1
    for(let reno of indices){
        race += " ".repeat(spaces)
        if(reno > 0){
            race += "~".repeat(reno) + "r" + "~".repeat(length - reno - 1)
        }
        else
            if (reno < 0){
                race += "~".repeat(length + reno) + "r" + "~".repeat(reno * -1 - 1)
            }
            else
                race += "~".repeat(length)
        race += " /" + (indices.length - spaces).toString() + "\n"
        spaces -= 1

    }

    return race.substring(0, race.length - 1)
}