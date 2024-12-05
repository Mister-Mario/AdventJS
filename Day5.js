function organizeShoes(shoes) {
    let shoesDic = {}
    let shoesPairs = new Array()
    for (let shoe of shoes){
      let shoeSize = shoe["size"]
      let shoeType = shoe["type"]
      if(shoesDic[shoeSize]) // Existen de ese tamaño
        if(shoesDic[shoeSize][0] == shoeType) //Si lo que hay son de ese tipo pues añadimos
          shoesDic[shoeSize].push(shoeType)
        else{ //Hemos encontrado un par
          if(shoesDic[shoeSize].length == 1)
            delete shoesDic[shoeSize]
          else
            shoesDic[shoeSize].pop()
          shoesPairs.push(shoeSize)
        }
      else
        shoesDic[shoeSize] = new Array(shoeType)
    }
    return shoesPairs
  }

  const shoes = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 42 }
  ]

console.log(organizeShoes(shoes))