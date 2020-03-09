var canvas = document.getElementById("chessBoard");

BoardManager.init(canvas);

canvas.addEventListener("click", function (event) {
	var result = BoardManager.isFigureClicked(event.x, event.y);
	if (result) {
		var x = event.x;
		var y = event.y;
	}
	
});