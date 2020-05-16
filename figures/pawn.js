var Pawn = function (objectConstructor) {
	this.color = objectConstructor.color;
	this.x = objectConstructor.x;
	this.y = objectConstructor.y;
	this._selected = false;
	this.firstMove = true;
	this.type = "PAWN";
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
		return true;
	}

	return false;
};

Pawn.prototype.isSelected = function () {
	return this._selected;
};

Pawn.prototype.setSelected = function (value) {
	this._selected = value;
};

Pawn.prototype.move = function (x, y) {
	let newX = BoardManager.findCoordinate(x);
	let newY = BoardManager.findCoordinate(y);

	if (this.firstMove) {
		if ((newY >= (this.y - 2) && this.x == newX)
			&& this.color == Config.FIGURES_COLORS.WHITE) {
			
			if (!this.isPathFree(newX, newY)) {
				console.log("path is not free!");
				return false;
			}
			
			this.x = newX;
			this.y = newY;
			this._selected = false;
			BoardManager.reRender();
			this.firstMove = false;
			return true;
		} else if ((newY <= (this.y + 2) && this.x == newX)
			&& this.color == Config.FIGURES_COLORS.BLACK) {

			if (!this.isPathFree(newX, newY)) {
				console.log("path is not free!");
				return false;
			}

			this.x = newX;
			this.y = newY;
			this._selected = false;
			BoardManager.reRender();
			this.firstMove = false;
			return true;
		}
	} else {
		if (((newY >= (this.y - 1) && newY < this.y) && this.x == newX)
			&& this.color == Config.FIGURES_COLORS.WHITE) {
			this.x = newX;
			this.y = newY;
			this._selected = false;
			BoardManager.reRender();
			this.firstMove = false;
			return true;
		} else if (((newY <= (this.y + 1) && newY > this.y) && this.x == newX)
			&& this.color == Config.FIGURES_COLORS.BLACK) {
			this.x = newX;
			this.y = newY;
			this._selected = false;
			BoardManager.reRender();
			this.firstMove = false;
			return true;
		}
	}
	return false;
};

Pawn.prototype.atack = function (x, y) {

	if (((x == (this.x + 1) || x == (this.x - 1)) && y == (this.y - 1))
		&& this.color == Config.FIGURES_COLORS.WHITE) {

		BoardManager.figuresCollection.forEach((element, index, arr) => {
			if (element.x == x && element.y == y) {
				arr.splice(index, 1);
			}
		});
		
		this.x = x;
		this.y = y;
		this._selected = false;
		return true;
	} else if (((x == (this.x + 1) || x == (this.x - 1)) && y == (this.y + 1))
		&& this.color == Config.FIGURES_COLORS.BLACK) {

		BoardManager.figuresCollection.forEach((element, index, arr) => {
			if (element.x == x && element.y == y) {
				arr.splice(index, 1);
			}
		});

		this.x = x;
		this.y = y;
		this._selected = false;
		return true;
	}
	
	return false;
};

Pawn.prototype.getColor = function () {
	return this.color;
};

Pawn.prototype.getType = function () {
	return this.type;
};

Pawn.prototype.isPathFree = function (x, y) {
	if (this.color === Config.FIGURES_COLORS.WHITE) {
		if (!BoardManager.isEmpty(x, y + 1)
			&& y == this.y - 2) {
			return false;
		}
	} else {
		if (!BoardManager.isEmpty(x, y - 1)
			&& y == this.y + 2) {
			return false;
		}
	}
	return true;
};
