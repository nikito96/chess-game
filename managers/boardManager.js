var BoardManager = {};

BoardManager.init = function (canvas) {
	this.canvas = canvas;
	this.context = this.canvas.getContext("2d");
	this.tilesCollection = [];
	this.figuresCollection = [];
	this.playerOnTurn = Config.PLAYER_COLORS.WHITE;

	for (var i = 0; i < 8; i++) {
		for (var j = 0; j < 8; j++) {
			if ((i + j) % 2 == 0) {
				var tileConstructor = {
					x: j,
					y: i,
					color: Config.BOARD_COLORS.WHITE
				};

				this.tilesCollection.push(new Tile(tileConstructor));
			} else {
				var tileConstructor = {
					x: j,
					y: i,
					color: Config.BOARD_COLORS.BLACK
				};

				this.tilesCollection.push(new Tile(tileConstructor));
			}
		}
	}
	this.loadBoard();
};

BoardManager.renderTiles = function () {
	for (var i = 0; i < BoardManager.tilesCollection.length; i++) {
		BoardManager.tilesCollection[i].render(BoardManager.context);
	}
}

BoardManager.renderFigures = function () {
	for (var i = 0; i < BoardManager.figuresCollection.length; i++) {
		BoardManager.figuresCollection[i].render(BoardManager.context);
	}
}


BoardManager.loadBoard = function () {

	BoardManager.renderTiles();

	var loadFigures = function () {
		var pawnWhiteConstructor_1 = {
			type: Config.WHITE_FIGURES.PAWN,
			color: Config.FIGURES_COLORS.WHITE,
			x: Config.COORDINATES.A,
			y: 1
		};

		var pawnWhiteConstructor_2 = {
			type: Config.WHITE_FIGURES.PAWN,
			color: Config.FIGURES_COLORS.WHITE,
			x: Config.COORDINATES.B,
			y: 1
		};

		var pawnWhiteConstructor_3 = {
			type: Config.WHITE_FIGURES.PAWN,
			color: Config.FIGURES_COLORS.WHITE,
			x: Config.COORDINATES.C,
			y: 1
		};

		var pawnWhiteConstructor_4 = {
			type: Config.WHITE_FIGURES.PAWN,
			color: Config.FIGURES_COLORS.WHITE,
			x: Config.COORDINATES.D,
			y: 1
		};

		var pawnWhiteConstructor_5 = {
			type: Config.WHITE_FIGURES.PAWN,
			color: Config.FIGURES_COLORS.WHITE,
			x: Config.COORDINATES.E,
			y: 1
		};

		var pawnBlackConstructor_6 = {
			type: Config.BLACK_FIGURES.PAWN,
			color: Config.FIGURES_COLORS.BLACK,
			x: Config.COORDINATES.A,
			y: 6
		};

		var pawn_1 = new Figure(pawnWhiteConstructor_1);
		var pawn_2 = new Figure(pawnWhiteConstructor_2);
		var pawn_3 = new Figure(pawnWhiteConstructor_3);
		var pawn_4 = new Figure(pawnWhiteConstructor_4);
		var pawn_5 = new Figure(pawnWhiteConstructor_5);
		var pawn_6 = new Figure(pawnBlackConstructor_6);
		BoardManager.figuresCollection.push(pawn_1);
		BoardManager.figuresCollection.push(pawn_2);
		BoardManager.figuresCollection.push(pawn_3);
		BoardManager.figuresCollection.push(pawn_4);
		BoardManager.figuresCollection.push(pawn_5);
		BoardManager.figuresCollection.push(pawn_6);
	};

	loadFigures();
	BoardManager.renderFigures();
};

BoardManager.isFigureClicked = function (x, y) {

	for (let figure of BoardManager.figuresCollection) {

		if (figure.isClicked(x, y)) {
			let = figureColor = figure.getColor();
			let = playerOnTurn = BoardManager.getPlayerOnTurn();

			if (figureColor !== playerOnTurn) {
				return false;
			}

			return true
		}
	}

	return false;
}

BoardManager.isFigureSelected = function () {

	for (var figure of BoardManager.figuresCollection) {
		let isSelected = figure.isSelected();
		if(isSelected) {
			return true;
		}
	}

	return false;
}

BoardManager.move = function (x, y) {
	for (const figure of BoardManager.figuresCollection) {
		if (figure.isSelected()) {
			figure.move(x, y);
			
			let figureColor = figure.getColor();

			if (figureColor == Config.PLAYER_COLORS.WHITE) {
				BoardManager.setPlayerOnTurn(Config.PLAYER_COLORS.BLACK);
			} else {
				BoardManager.setPlayerOnTurn(Config.PLAYER_COLORS.WHITE);
			}
		}
	}
}

BoardManager.reRender = function () {
	BoardManager.context.clearRect(0, 0, 400, 400);
	BoardManager.renderTiles();
	BoardManager.renderFigures();
}

BoardManager.findCoordinate = function (coordinate) {
	if (coordinate < Config.TILE_SIZE) {
		return 0;
	} else if (coordinate > Config.TILE_SIZE
		&& coordinate < Config.TILE_SIZE * 2) {
		return 1;
	} else if (coordinate > Config.TILE_SIZE * 2
		&& coordinate < Config.TILE_SIZE * 3) {
		return 2;
	} else if (coordinate > Config.TILE_SIZE * 3
		&& coordinate < Config.TILE_SIZE * 4) {
		return 3;
	} else if (coordinate > Config.TILE_SIZE * 4
		&& coordinate < Config.TILE_SIZE * 5) {
		return 4;
	} else if (coordinate > Config.TILE_SIZE * 5
		&& coordinate < Config.TILE_SIZE * 6) {
		return 5;
	} else if (coordinate > Config.TILE_SIZE * 6
		&& coordinate < Config.TILE_SIZE * 7) {
		return 6;
	} else {
		return 7;
	}
}

BoardManager.getPlayerOnTurn = function () {
	return this.playerOnTurn;
}

BoardManager.setPlayerOnTurn = function (color) {
	BoardManager.playerOnTurn = color;
}
