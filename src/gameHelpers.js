export const STAGE_WIDTH = 12
export const STAGE_HEIGHT = 20

export const createStage = () => {
  return Array.from(Array(STAGE_HEIGHT), () => {
    return new Array(STAGE_WIDTH).fill([0, 'clear'])
  })
}

export const checkCollision = (player, stage, {x: moveX, y: moveY}) => {
  for(let y = 0; y < player.tetromino.length; y++) {
    for(let x = 0; x < player.tetromino[y].length; x++) {

      //1. Check that we are on a tetromino cell
      if(player.tetromino[y][x] !== 0) {
        if(
        //2. Check that the move is within the game area's height(y)
        !stage[y + player.pos.y +moveY] ||
        //3. Check that move is inside game area's width(x)
        !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
        //4. Check that the set we are moving to isn't clear
        stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear'
      ) {
        return true
      }

      }
    }
  }
}
