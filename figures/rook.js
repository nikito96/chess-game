var Rook = function (objectConstructor) {
    this.color = objectConstructor.color;
	this.x = objectConstructor.x;
	this.y = objectConstructor.y;
	this._selected = false;
	this.type = "ROOK";
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
		return true;
	}

	return false;
};

Rook.prototype.isSelected = function () {
	return this._selected;
};

Rook.prototype.setSelected = function (value) {
	this._selected = value;
};

Rook.prototype.move = function (x, y) {
	let newX = BoardManager.findCoordinate(x);
	let newY = BoardManager.findCoordinate(y);
	let figureX = this.x;
	let figureY = this.y;

	if (figureX == newX) {
			if (figureY < newY) {
				this.y = newY;
				this._selected = false;
				BoardManager.reRender();
				return true;
			} else {
				this.y = newY;
				this._selected = false;
				BoardManager.reRender();
				return true;
			}
	} else if (figureY == newY) {
		if (figureX < newX) {
			this.x = newX;
			this._selected = false;
			BoardManager.reRender();
			return true;
		} else {
			this.x = newX;
			this._selected = false;
			BoardManager.reRender();
			return true;
		}
	}
};

Rook.prototype.atack = function (x, y) {
	if (this.x == x) {
		if (this.y < y) {
			BoardManager.figuresCollection.forEach((element, index, arr) => {
				if (element.x == x && element.y == y) {
					arr.splice(index, 1);
				}
			});

			this.y = y;
			return true;
		} else {
			BoardManager.figuresCollection.forEach((element, index, arr) => {
				if (element.x == x && element.y == y) {
					arr.splice(index, 1);
				}
			});

			this.y = y;
			return true;
		}
	} else if (this.y == y) {
		if (this.x < x) {
			BoardManager.figuresCollection.forEach((element, index, arr) => {
				if (element.x == x && element.y == y) {
					arr.splice(index, 1);
				}
			});

			this.x = x;
			return true;
		} else {
			BoardManager.figuresCollection.forEach((element, index, arr) => {
				if (element.x == x && element.y == y) {
					arr.splice(index, 1);
				}
			});

			this.x = x;
			return true;
		}
	}
	
	return false;
};

Rook.prototype.getColor = function () {
	return this.color;
};

Rook.prototype.getType = function () {
	return this.type;
};
