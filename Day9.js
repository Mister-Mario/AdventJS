function moveTrain(board, mov) {
    let actions = {"·" : "none", "*" : "eat", "o" : "crash"}
    //Localizamos la cabeza
    let i = 0
    let j = 0
    while(i < board.length){
      while(j < board[i].length){
        if(board[i][j] =="@"){
            switch (mov){
                case "D":
                    if((i + 1) == board.length)
                      return "crash"
                    else
                      return actions[board[i + 1][j]]
                case "U":
                    if((i - 1) < 0)
                      return "crash"
                    else
                      return actions[board[i - 1][j]]
                case "R":
                    if((j + 1) == board[i].length)
                      return "crash"
                    else
                      return actions[board[i][j + 1]]
                case "L":
                    if((j - 1) < 0)
                      return "crash"
                    else
                      return actions[board[i][j - 1]]
                default:
                  return "error"
            }
        }
        j += 1
      }
      j = 0
      i+=1
    }
  }

  const board = ['·····', '*····', '@····', 'o····', 'o····']

  console.log(moveTrain(board, 'U'))
  console.log(moveTrain(board, 'D'))
  console.log(moveTrain(board, 'L'))
  console.log(moveTrain(board, 'R'))