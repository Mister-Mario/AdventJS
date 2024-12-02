function prepareGifts(gifts) {
    var set = new Set()
    gifts.forEach(gift => set.add(gift))
    var ret = Array.from(set)
    ret.sort((a,b) => a-b ) 
    return ret
}

prepareGifts([100,1000,100,500,200,500,200])