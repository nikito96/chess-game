var canvas = document.getElementById("chessBoard");

BoardManager.init(canvas);

canvas.addEventListener("click", function (event) {
	let x = event.x;
	let y = event.y;

	let isFigureClicked = BoardManager.isFigureClicked(x, y);
	let clicked = BoardManager.isFigureSelected();
	
	if (clicked && !isFigureClicked) {
		BoardManager.move(x, y);
	}
});