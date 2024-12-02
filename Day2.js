function createFrame(names) {
    // Code here
    let marco = ""
    let nombresEnmarcados = []
    let maxLength = 0
    for (let nameGiven of names){
      if(maxLength < nameGiven.length)
        maxLength = nameGiven.length
      nombresEnmarcados.push("*".concat(nameGiven).concat("*"))
    } 
    //Sumamos 2 a maxLength por los * de los extremos
    maxLength += 2
    marco = marco.concat("*".repeat(maxLength).concat("\n"))
    for(let nombreEnmarcado of nombresEnmarcados){
      let nombreLength = nombreEnmarcado.length
      if( nombreLength < maxLength)
        marco = marco.concat( 
          nombreEnmarcado.slice(0, -1)).concat(" ".repeat(maxLength - nombreLength)).concat("*").concat("\n")
      else
            marco = marco.concat(nombreEnmarcado).concat("\n")
    }
    marco = marco.concat("*".repeat(maxLength))
    return marco
  }

  console.log(createFrame(["midu"]))