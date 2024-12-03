function organizeInventory(inventory) {
    let dic = {}
    let category = {}
    let name = {}
    for (let gift of inventory){
      category = gift["category"]
      if(dic[category]){ //Si existe
        category = dic[category]
        name = gift["name"]
        if(category[name]){
          category[name] += gift["quantity"]
        }
        else{
          category[name] = gift["quantity"]
        }
      }
      else{
        dic[category] = {[gift["name"]]: gift["quantity"]}
      }
    }
    return dic
  }