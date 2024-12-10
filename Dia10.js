/**
 * @param {string[]} instructions - The instructions to execute
 * @returns {number} The value of the register A
 */
function compile(instructions) {
    const addValue = function(register, valueToAdd) {
      if(registers[register])
        registers[register] += valueToAdd
      else
        registers[register] = valueToAdd
    }
  
    const mov = function(value, register){
      if(!isNaN(Number(value)))
        registers[register] = parseInt(value)
      else
        registers[register] = registers[value] + 0
    }
  
    const jump = function(register, index){
      if(registers[register]){
        if(registers[register] == 0)
          counter = index
      }
      else
        counter = index
    }
    let counter = 0
    let registers = {}
    let splitted = []
    while(counter < instructions.length){
      splitted = instructions[counter].split(" ")
      switch(splitted[0]){
        case "MOV":
          mov(splitted[1], splitted[2])
          break
        case "INC":
          addValue(splitted[1], 1)
          break
        case "JMP":
          jump(splitted[1], parseInt(splitted[2]) - 1)
          break
        case "DEC":
          addValue(splitted[1], -1)
          break
      }
      counter += 1
    }
  
    if(registers["A"])
      return registers["A"]
    else
      return undefined
  }

  console.log(compile([
    "MOV 2 X",
    "DEC X",
    "DEC X",
    "JMP X 1",
    "MOV X A"
  ]))