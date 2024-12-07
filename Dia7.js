function fixPackages(packages) {
    // Code here
  
    let sections = {0:[]}
    let sectionLength = 0
    for (let char of packages){
      if(char == "("){
        sectionLength += 1
        sections[sectionLength] = new Array()
      }
      else
        if(char == ")"){
            let prevSection = sections[sectionLength - 1]
            let section = sections[sectionLength]
            while(section.length != 0)
                prevSection.push(section.pop())
          sectionLength -= 1
        }
        else
          sections[sectionLength].push(char)
    }
  
    let ordered = ""
    for(let char of sections[0])
      ordered += char
    return ordered
  }

console.log(fixPackages("a(cb)de"))