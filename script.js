const BOARD_SIZE = 8;
const SQUARE_SIZE = 50;

const board = document.querySelector(".board");

for (let row = 0; row < BOARD_SIZE; row++) {
  for (let col = 0; col < BOARD_SIZE; col++) {

    const square = document.createElement("div");
    square.classList.add("square");

    if ((row + col) % 2 === 0) {
      square.classList.add("white");
    } else {
      square.classList.add("black");
    }

    square.style.top = `${row * SQUARE_SIZE}px`;
    square.style.left = `${col * SQUARE_SIZE}px`;

    board.appendChild(square);

    for (let i = 0; i < 2; i++) {
      const subSquare = document.createElement("div");
      subSquare.classList.add("sub-square");

      if (i === 1) {
        subSquare.classList.add("sub-square-bottom");
      }

      square.appendChild(subSquare);
    }
  }
}

