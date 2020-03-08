var Figure = function (objectConstructor) {
	this.type = objectConstructor.type;
	this.color = objectConstructor.color;
	this.x = objectConstructor.x;
	this.y = objectConstructor.y;
};

Figure.prototype.render = function(context) {
	
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

	context.drawImage(image, this.x, this.y);
};