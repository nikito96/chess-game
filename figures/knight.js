var Knight = function (objectConstructor) {
    this.color = objectConstructor.color;
	this.x = objectConstructor.x;
	this.y = objectConstructor.y;
	this._selected = false;
};

Knight.prototype.render = function (context) {
    var x = Config.TILE_SIZE * this.x;
	var y = Config.TILE_SIZE * this.y;
	var image = new Image();

	if (this.color == Config.FIGURES_COLORS.WHITE) {
		image.src = Config.WHITE_FIGURES.KNIGHT;
	} else {
		image.src = Config.BLACK_FIGURES.KNIGHT;
	}

	image.onload = function () {
		context.drawImage(image, x, y);
	};
};

Knight.prototype.isClicked = function (x, y) {
	var figureX = this.x * Config.TILE_SIZE;
	var figureY = this.y * Config.TILE_SIZE;

	if ((x > figureX) && (x < figureX + Config.TILE_SIZE)
		&& (y > figureY) && (y < figureY + Config.TILE_SIZE)) {
		this._selected = true;
		return true;
	}

	return false;
};

Knight.prototype.isSelected = function () {
	return this._selected;
};

Knight.prototype.move = function (x, y) {
	let newX = BoardManager.findCoordinate(x);
	let newY = BoardManager.findCoordinate(y);

	this.x = newX;
	this.y = newY;
	this._selected = false;
	BoardManager.reRender();
};

Knight.prototype.getColor = function () {
	return this.color;
};
