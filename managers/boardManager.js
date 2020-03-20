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
		let pawnWhiteConstructor_1 = {
			type: Config.WHITE_FIGURES.PAWN,
			color: Config.FIGURES_COLORS.WHITE,
			x: Config.COORDINATES.A,
			y: 6
		};

		let pawnWhiteConstructor_2 = {
			type: Config.WHITE_FIGURES.PAWN,
			color: Config.FIGURES_COLORS.WHITE,
			x: Config.COORDINATES.B,
			y: 6
		};

		let pawnWhiteConstructor_3 = {
			type: Config.WHITE_FIGURES.PAWN,
			color: Config.FIGURES_COLORS.WHITE,
			x: Config.COORDINATES.C,
			y: 6
		};

		let pawnWhiteConstructor_4 = {
			type: Config.WHITE_FIGURES.PAWN,
			color: Config.FIGURES_COLORS.WHITE,
			x: Config.COORDINATES.D,
			y: 6
		};

		let rookWhiteConstructor = {
			type: Config.WHITE_FIGURES.ROOK,
			color: Config.FIGURES_COLORS.WHITE,
			x: Config.COORDINATES.D,
			y: 7
		};

		let bishopWhiteConstructor = {
			type: Config.WHITE_FIGURES.BISHOP,
			color: Config.FIGURES_COLORS.WHITE,
			x: Config.COORDINATES.C,
			y: 7
		};

		let kingWhiteConstructor = {
			type: Config.WHITE_FIGURES.KING,
			color: Config.FIGURES_COLORS.WHITE,
			x: Config.COORDINATES.B,
			y: 7
		};

		let queenWhiteConstructor = {
			type: Config.WHITE_FIGURES.QUEEN,
			color: Config.FIGURES_COLORS.WHITE,
			x: Config.COORDINATES.A,
			y: 7
		};

		let pawnBlackConstructor_1 = {
			type: Config.BLACK_FIGURES.PAWN,
			color: Config.FIGURES_COLORS.BLACK,
			x: Config.COORDINATES.A,
			y: 1
		};

		let pawnBlackConstructor_2 = {
			type: Config.BLACK_FIGURES.PAWN,
			color: Config.FIGURES_COLORS.BLACK,
			x: Config.COORDINATES.B,
			y: 1
		};

		let pawnBlackConstructor_3 = {
			type: Config.BLACK_FIGURES.PAWN,
			color: Config.FIGURES_COLORS.BLACK,
			x: Config.COORDINATES.C,
			y: 1
		};

		let pawnBlackConstructor_4 = {
			type: Config.BLACK_FIGURES.PAWN,
			color: Config.FIGURES_COLORS.BLACK,
			x: Config.COORDINATES.D,
			y: 1
		};

		let rookBlackConstructor = {
			type: Config.BLACK_FIGURES.ROOK,
			color: Config.FIGURES_COLORS.BLACK,
			x: Config.COORDINATES.D,
			y: 0
		};

		let bishopBlackConstructor = {
			type: Config.BLACK_FIGURES.BISHOP,
			color: Config.FIGURES_COLORS.BLACk,
			x: Config.COORDINATES.C,
			y: 0
		};

		let kingBlackConstructor = {
			type: Config.BLACK_FIGURES.KING,
			color: Config.FIGURES_COLORS.BLACk,
			x: Config.COORDINATES.B,
			y: 0
		};

		let queenBlackConstructor = {
			type: Config.BLACK_FIGURES.QUEEN,
			color: Config.FIGURES_COLORS.BLACk,
			x: Config.COORDINATES.A,
			y: 0
		};

		let white_pawn_1 = new Figure(pawnWhiteConstructor_1);
		let white_pawn_2 = new Figure(pawnWhiteConstructor_2);
		let white_pawn_3 = new Figure(pawnWhiteConstructor_3);
		let white_pawn_4 = new Figure(pawnWhiteConstructor_4);
		let white_rook = new Figure(rookWhiteConstructor);
		let white_bishop = new Figure(bishopWhiteConstructor);
		let white_king = new Figure(kingWhiteConstructor);
		let white_queen = new Figure(queenWhiteConstructor);

		let black_pawn_1 = new Figure(pawnBlackConstructor_1);
		let black_pawn_2 = new Figure(pawnBlackConstructor_2);
		let black_pawn_3 = new Figure(pawnBlackConstructor_3);
		let black_pawn_4 = new Figure(pawnBlackConstructor_4);
		let black_rook = new Figure(rookBlackConstructor);
		let black_bishop = new Figure(bishopBlackConstructor);
		let black_king = new Figure(kingBlackConstructor);
		let black_queen = new Figure(queenBlackConstructor);

		BoardManager.figuresCollection.push(white_pawn_1);
		BoardManager.figuresCollection.push(white_pawn_2);
		BoardManager.figuresCollection.push(white_pawn_3);
		BoardManager.figuresCollection.push(white_pawn_4);
		BoardManager.figuresCollection.push(white_rook);
		BoardManager.figuresCollection.push(white_bishop);
		BoardManager.figuresCollection.push(white_king);
		BoardManager.figuresCollection.push(white_queen);

		BoardManager.figuresCollection.push(black_pawn_1);
		BoardManager.figuresCollection.push(black_pawn_2);
		BoardManager.figuresCollection.push(black_pawn_3);
		BoardManager.figuresCollection.push(black_pawn_4);
		BoardManager.figuresCollection.push(black_rook);
		BoardManager.figuresCollection.push(black_bishop);
		BoardManager.figuresCollection.push(black_king);
		BoardManager.figuresCollection.push(black_queen);
	};

	loadFigures();
	BoardManager.renderFigures();
};

BoardManager.isFigureClicked = function (x, y) {

	for (let figure of BoardManager.figuresCollection) {

		if (figure.isClicked(x, y)) {
			let = figureColor = figure.getColor();
			let = playerOnTurn = BoardManager.getPlayerOnTurn();

			console.log("figure color: " + figureColor);
			console.log("player on turn: " + playerOnTurn);

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
			console.log("figure color to be moved: " + figureColor);
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
	console.log("set player on turn: " + color);
	console.log("----");
	BoardManager.playerOnTurn = color;
}
