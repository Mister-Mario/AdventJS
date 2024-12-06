/** @param {string[]} gifts
 *  @returns {boolean} True if the gift is inside the box
 */
function inBox(box) {
    //Esta el regalo cerrado por arriba
    if(box[0].replaceAll("#","").length != 0)
      return false
    //Esta el regalo cerrado por abajo
    if(box[box.length - 1].replaceAll("#","").length != 0)
      return false
  
    let counter = 1
    while(counter < (box.length - 1)){
      let splittedString = box[counter].split("*")
      if(splittedString.length == 2){ //El regalo esta en esta fila
        return splittedString[0][0] == "#" && splittedString[1][splittedString[1].length - 1] == "#"
        }
      counter += 1
    }
    return false
  }