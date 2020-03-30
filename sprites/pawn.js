var Pawn = function (objectConstructor) {
	this.color = objectConstructor.color;
	this.x = objectConstructor.x;
	this.y = objectConstructor.y;
	this._selected = false;
};

Pawn.prototype.render = function (context) {
    var x = Config.TILE_SIZE * this.x;
	var y = Config.TILE_SIZE * this.y;
	var image = new Image();

	if (this.color == Config.FIGURES_COLORS.WHITE) {
		image.src = Config.WHITE_FIGURES.PAWN;
	} else {
		image.src = Config.BLACK_FIGURES.PAWN;
	}

	image.onload = function () {
		context.drawImage(image, x, y);
	};
};

Pawn.prototype.isClicked = function (x, y) {
	var figureX = this.x * Config.TILE_SIZE;
	var figureY = this.y * Config.TILE_SIZE;

	if ((x > figureX) && (x < figureX + Config.TILE_SIZE)
		&& (y > figureY) && (y < figureY + Config.TILE_SIZE)) {
		this._selected = true;
		return true;
	}

	return false;
};

Pawn.prototype.isSelected = function () {
	return this._selected;
};

Pawn.prototype.move = function (x, y) {
	let newX = BoardManager.findCoordinate(x);
	let newY = BoardManager.findCoordinate(y);

	if ((newY >= (this.y - 2) && this.x == newX)
		&& this.color == Config.FIGURES_COLORS.WHITE) {
		this.x = newX;
		this.y = newY;
		this._selected = false;
		BoardManager.reRender();
		return true;
	} else if ((newY <= (this.y + 2) && this.x == newX)
		&& this.color == Config.FIGURES_COLORS.BLACK) {
		this.x = newX;
		this.y = newY;
		this._selected = false;
		BoardManager.reRender();
		return true;
	}
	return false;
};

Pawn.prototype.atack = function (x, y) {

};

Pawn.prototype.getColor = function () {
	return this.color;
};
