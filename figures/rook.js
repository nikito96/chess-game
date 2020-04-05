var Rook = function (objectConstructor) {
    this.color = objectConstructor.color;
	this.x = objectConstructor.x;
	this.y = objectConstructor.y;
	this._selected = false;
};

Rook.prototype.render = function (context) {
    var x = Config.TILE_SIZE * this.x;
	var y = Config.TILE_SIZE * this.y;
	var image = new Image();

	if (this.color == Config.FIGURES_COLORS.WHITE) {
		image.src = Config.WHITE_FIGURES.ROOK;
	} else {
		image.src = Config.BLACK_FIGURES.ROOK;
	}

	image.onload = function () {
		context.drawImage(image, x, y);
	};
};

Rook.prototype.isClicked = function (x, y) {
	var figureX = this.x * Config.TILE_SIZE;
	var figureY = this.y * Config.TILE_SIZE;

	if ((x > figureX) && (x < figureX + Config.TILE_SIZE)
		&& (y > figureY) && (y < figureY + Config.TILE_SIZE)) {
		this._selected = true;
		return true;
	}

	return false;
};

Rook.prototype.isSelected = function () {
	return this._selected;
};

Rook.prototype.setSelected = function () {
	this._selected = true;
};

Rook.prototype.move = function (x, y) {
	let newX = BoardManager.findCoordinate(x);
	let newY = BoardManager.findCoordinate(y);
	let figureX = this.x;
	let figureY = this.y;

	if (figureX == newX) {
			if (figureY < newY) {
				this.y = newY;
			} else {
				this.y = newY;
			}
	} else if (figureY == newY) {
		if (figureX < newX) {
			this.x = newX;
		} else {
			this.x = newX;
		}
	}

	// this.x = newX;
	// this.y = newY;
	this._selected = false;
	BoardManager.reRender();
};

Rook.prototype.getColor = function () {
	return this.color;
};
