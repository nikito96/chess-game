var canvas = document.getElementById("chessBoard");

BoardManager.init(canvas);

canvas.addEventListener("click", function (event) {
	let x = event.x;
	let y = event.y;

	BoardManager.action(x, y);
});