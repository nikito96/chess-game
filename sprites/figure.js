var Figure = function (objectConstructor) {
	this.type = objectConstructor.type;
	this.color = objectConstructor.color;
	this.x = objectConstructor.x;
	this.y = objectConstructor.y;
	this._selected = false;
};

Figure.prototype.render = function(context) {
	
	var x = Config.TILE_SIZE * this.x;
	var y = Config.TILE_SIZE * this.y;
	var image = new Image();

	if (this.color == Config.FIGURES_COLORS.WHITE) {
		switch (this.type) {
			case Config.WHITE_FIGURES.PAWN:
				image.src = Config.WHITE_FIGURES.PAWN;
				break;
			case Config.WHITE_FIGURES.KNIGHT:
				image.src = Config.WHITE_FIGURES.KNIGHT;
				break;
			case Config.WHITE_FIGURES.BISHOP:
				image.src = Config.WHITE_FIGURES.BISHOP;
				break;
			case Config.WHITE_FIGURES.ROOK:
				image.src = Config.WHITE_FIGURES.ROOK;
				break;
			case Config.WHITE_FIGURES.QUEEN:
				image.src = Config.WHITE_FIGURES.QUEEN;
				break;
			case Config.WHITE_FIGURES.KING:
				image.src = Config.WHITE_FIGURES.KING;
				break;
		}
	} else {
		switch (this.type) {
			case Config.BLACK_FIGURES.PAWN:
				image.src = Config.BLACK_FIGURES.PAWN;
				break;
			case Config.BLACK_FIGURES.KNIGHT:
				image.src = Config.BLACK_FIGURES.KNIGHT;
				break;
			case Config.BLACK_FIGURES.BISHOP:
				image.src = Config.BLACK_FIGURES.BISHOP;
				break;
			case Config.BLACK_FIGURES.ROOK:
				image.src = Config.BLACK_FIGURES.ROOK;
				break;
			case Config.BLACK_FIGURES.QUEEN:
				image.src = Config.BLACK_FIGURES.QUEEN;
				break;
			case Config.BLACK_FIGURES.KING:
				image.src = Config.BLACK_FIGURES.KING;
				break;
		}
	}

	image.onload = function () {
		context.drawImage(image, x, y);
	};
};

Figure.prototype.isClicked = function(x, y) {
	var figureX = this.x * Config.TILE_SIZE;
	var figureY = this.y * Config.TILE_SIZE;

	if ((x > figureX) && (x < figureX + Config.TILE_SIZE)
		&& (y > figureY) && (y < figureY + Config.TILE_SIZE)) {
		this._selected = true;
		return true;
	}

	return false;
};

Figure.prototype.isSelected = function () {
	return this._selected;
}

Figure.prototype.move = function (x, y) {
	let newX = BoardManager.findCoordinate(x);
	let newY = BoardManager.findCoordinate(y);

	this.x = newX;
	this.y = newY;
	this._selected = false;
	BoardManager.reRender()
}