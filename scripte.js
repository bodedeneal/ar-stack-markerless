const stackArea = document.getElementById('stackArea');
const scoreDisplay = document.getElementById('score');
let score = 47;

function createBlock(color, topOffset) {
  const block = document.createElement('div');
  block.className = 'block';
  block.style.top = `${topOffset}px`;
  block.style.backgroundColor = color;
  stackArea.appendChild(block);
}

// Sample stack
const colors = ['#F16745', '#D94F70', '#A94F9D', '#6C5B7B', '#355C7D'];
for (let i = 0; i < colors.length; i++) {
  createBlock(colors[i], 500 - i * 22);
}

function restartGame() {
  alert("Game restarted!");
  score = 0;
  scoreDisplay.textContent = score;
  stackArea.innerHTML = '';
}
