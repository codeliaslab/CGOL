// Set up the canvas and context
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Define the size of each cell and the grid
const cellSize = 10;
const gridWidth = Math.floor(canvas.width / cellSize);
const gridHeight = Math.floor(canvas.height / cellSize);
let grid = new Array(gridWidth).fill(0).map(() => new Array(gridHeight).fill(false));

// Define the rules of the game
function getNextState(x, y) {
  const numNeighbors = countNeighbors(x, y);
  if (grid[x][y]) {
    return numNeighbors === 2 || numNeighbors === 3;
  } else {
    return numNeighbors === 3;
  }
}

// Count the number of live neighbors for a given cell
function countNeighbors(x, y) {
  let count = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i === 0 && j === 0) {
        continue;
      }
      const neighborX = x + i;
      const neighborY = y + j;
      if (neighborX < 0 || neighborX >= gridWidth || neighborY < 0 || neighborY >= gridHeight) {
        continue;
      }
      if (grid[neighborX][neighborY]) {
        count++;
      }
    }
  }
  return count;
}

// Update the grid with the next state
function updateGrid() {
  const newGrid = new Array(gridWidth).fill(0).map(() => new Array(gridHeight).fill(false));
  for (let x = 0; x < gridWidth; x++) {
    for (let y = 0; y < gridHeight; y++) {
      newGrid[x][y] = getNextState(x, y);
    }
  }
  grid = newGrid;
}

// Draw the grid on the canvas
function drawGrid() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'black';
  for (let x = 0; x < gridWidth; x++) {
    for (let y = 0; y < gridHeight; y++) {
      if (grid[x][y]) {
        ctx.fillStyle = '#ffffffaa';
        ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
      }
    }
  }
}

// Start the animation loop
function animate() {
  updateGrid();
  drawGrid();
  requestAnimationFrame(animate);
}

// Initialize the grid with two Gosper Glider Guns shooting at each other from opposite sides
grid[1][5] = true;
grid[2][5] = true;
grid[1][6] = true;
grid[2][6] = true;

grid[13][5] = true;
grid[13][6] = true;
grid[13][7] = true;
grid[14][4] = true;
grid[14][8] = true;
grid[15][3] = true;
grid[15][9] = true;
grid[16][3] = true;
grid[16][9] = true;
grid[17][6] = true;
grid[18][4] = true;
grid[18][8] = true;
grid[19][5] = true;
grid[19][6] = true;
grid[19][7] = true;
grid[20][6] = true;

grid[25][5] = true;
grid[26][5] = true;
grid[25][6] = true;
grid[26][6] = true;

grid[37][3] = true;
grid[37][4] = true;
grid[38][3] = true;
grid[38][4] = true;

grid[37][11] = true;
grid[38][11] = true;
grid[39][11] = true;
grid[36][12] = true;
grid[40][12] = true;
grid[36][13] = true;
grid[40][13] = true;
grid[37][14] = true;
grid[38][14] = true;
grid[39][14] = true;
grid[38][15] = true;




grid[159][130] = true;
grid[158][130] = true;
grid[159][129] = true;
grid[158][129] = true;
grid[147][130] = true;
grid[147][129] = true;
grid[147][128] = true;
grid[146][131] = true;
grid[146][127] = true;
grid[145][132] = true;
grid[145][126] = true;
grid[144][132] = true;
grid[144][126] = true;
grid[137][123] = true;
grid[136][126] = true;
grid[136][122] = true;
grid[135][127] = true;
grid[135][121] = true;
grid[144][132] = true;
grid[122][113] = true;
grid[121][116] = true;
grid[121][112] = true;
grid[120][117] = true;
grid[120][111] = true;
grid[144][132] = true;
grid[143][129] = true;
grid[142][131] = true;
grid[142][127] = true;
grid[141][130] = true;
grid[141][129] = true;
grid[141][128] = true;
grid[140][129] = true;
grid[135][130] = true;
grid[134][130] = true;
grid[135][129] = true;
grid[134][129] = true;
grid[123][132] = true;
grid[123][131] = true;
grid[122][132] = true;
grid[122][131] = true;
grid[123][124] = true;
grid[122][124] = true;
grid[121][124] = true;
grid[124][123] = true;
grid[120][123] = true;
grid[124][122] = true;
grid[120][122] = true;
grid[123][121] = true;
grid[122][121] = true;
grid[121][121] = true;
grid[122][120] = true;












// Start the animation loop
animate();