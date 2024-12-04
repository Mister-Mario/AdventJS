function createXmasTree(height, ornament) {
    let arbol = ""
    let maxWide = 1 + (height - 1) * 2
    let counter = 0
    let wide = 0
    let blancks = 0
    while(counter < height){
      wide = counter * 2 + 1
      blancks = (maxWide - wide)/2
      arbol = arbol.concat("_".repeat(blancks))
      arbol = arbol.concat(ornament.repeat(wide))
      arbol = arbol.concat("_".repeat(blancks))
      arbol = arbol.concat("\n")
      counter += 1
    }
    counter = 0
    let maxBase = 2
    while(counter < maxBase){
      blancks = (maxWide - 1) / 2
      arbol = arbol.concat("_".repeat(blancks))
      arbol = arbol.concat("#")
      arbol = arbol.concat("_".repeat(blancks))
      if (counter < maxBase - 1)
        arbol = arbol.concat("\n")
      counter += 1
    }
    return arbol
  }

console.log(createXmasTree(6, "*"))