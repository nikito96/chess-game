var canvas = document.getElementById("chessBoard");

BoardManager.init(canvas);

canvas.addEventListener("click", function (event) {
	let x = event.x;
	let y = event.y;

	let isFigureClicked = BoardManager.isFigureClicked(x, y);
	let isSelected = BoardManager.isFigureSelected();

	if (isSelected && !isFigureClicked) {
		BoardManager.move(x, y);
	}
});