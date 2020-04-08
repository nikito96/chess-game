var BoardManager = {};

BoardManager.init = function (canvas) {
	this.canvas = canvas;
	this.context = this.canvas.getContext("2d");
	this.tilesCollection = [];
	this.figuresCollection = [];
	this.playerOnTurn = Config.PLAYER_COLORS.WHITE;
	this.selectedFigure = null;

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
			color: Config.FIGURES_COLORS.WHITE,
			x: Config.COORDINATES.A,
			y: 6
		};

		let pawnWhiteConstructor_2 = {
			color: Config.FIGURES_COLORS.WHITE,
			x: Config.COORDINATES.B,
			y: 6
		};

		let pawnWhiteConstructor_3 = {
			color: Config.FIGURES_COLORS.WHITE,
			x: Config.COORDINATES.C,
			y: 6
		};

		let pawnWhiteConstructor_4 = {
			color: Config.FIGURES_COLORS.WHITE,
			x: Config.COORDINATES.D,
			y: 6
		};

		let pawnWhiteConstructor_5 = {
			color: Config.FIGURES_COLORS.WHITE,
			x: Config.COORDINATES.E,
			y: 6
		};

		let rookWhiteConstructor = {
			color: Config.FIGURES_COLORS.WHITE,
			x: Config.COORDINATES.E,
			y: 7
		};

		let knightWhiteConstructor = {
			color: Config.FIGURES_COLORS.WHITE,
			x: Config.COORDINATES.D,
			y: 7
		};

		let bishopWhiteConstructor = {
			color: Config.FIGURES_COLORS.WHITE,
			x: Config.COORDINATES.C,
			y: 7
		};

		let kingWhiteConstructor = {
			color: Config.FIGURES_COLORS.WHITE,
			x: Config.COORDINATES.B,
			y: 7
		};

		let queenWhiteConstructor = {
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

		let pawnBlackConstructor_5 = {
			type: Config.BLACK_FIGURES.PAWN,
			color: Config.FIGURES_COLORS.BLACK,
			x: Config.COORDINATES.E,
			y: 1
		};

		let rookBlackConstructor = {
			color: Config.FIGURES_COLORS.BLACK,
			x: Config.COORDINATES.E,
			y: 0
		};

		let knightBlackConstructor = {
			color: Config.FIGURES_COLORS.BLACK,
			x: Config.COORDINATES.D,
			y: 0
		};

		let bishopBlackConstructor = {
			color: Config.FIGURES_COLORS.BLACK,
			x: Config.COORDINATES.C,
			y: 0
		};

		let kingBlackConstructor = {
			color: Config.FIGURES_COLORS.BLACK,
			x: Config.COORDINATES.B,
			y: 0
		};

		let queenBlackConstructor = {
			color: Config.FIGURES_COLORS.BLACK,
			x: Config.COORDINATES.A,
			y: 0
		};

		let white_pawn_1 = new Pawn(pawnWhiteConstructor_1);
		let white_pawn_2 = new Pawn(pawnWhiteConstructor_2);
		let white_pawn_3 = new Pawn(pawnWhiteConstructor_3);
		let white_pawn_4 = new Pawn(pawnWhiteConstructor_4);
		let white_pawn_5 = new Pawn(pawnWhiteConstructor_5);
		let white_rook = new Rook(rookWhiteConstructor);
		let white_knight = new Knight(knightWhiteConstructor);
		let white_bishop = new Bishop(bishopWhiteConstructor);
		let white_king = new King(kingWhiteConstructor);
		let white_queen = new Queen(queenWhiteConstructor);

		let black_pawn_1 = new Pawn(pawnBlackConstructor_1);
		let black_pawn_2 = new Pawn(pawnBlackConstructor_2);
		let black_pawn_3 = new Pawn(pawnBlackConstructor_3);
		let black_pawn_4 = new Pawn(pawnBlackConstructor_4);
		let black_pawn_5 = new Pawn(pawnBlackConstructor_5);
		let black_rook = new Rook(rookBlackConstructor);
		let black_knight = new Knight(knightBlackConstructor);
		let black_bishop = new Bishop(bishopBlackConstructor);
		let black_king = new King(kingBlackConstructor);
		let black_queen = new Queen(queenBlackConstructor);

		BoardManager.figuresCollection.push(white_pawn_1);
		BoardManager.figuresCollection.push(white_pawn_2);
		BoardManager.figuresCollection.push(white_pawn_3);
		BoardManager.figuresCollection.push(white_pawn_4);
		BoardManager.figuresCollection.push(white_pawn_5);
		BoardManager.figuresCollection.push(white_rook);
		BoardManager.figuresCollection.push(white_knight);
		BoardManager.figuresCollection.push(white_bishop);
		BoardManager.figuresCollection.push(white_king);
		BoardManager.figuresCollection.push(white_queen);

		BoardManager.figuresCollection.push(black_pawn_1);
		BoardManager.figuresCollection.push(black_pawn_2);
		BoardManager.figuresCollection.push(black_pawn_3);
		BoardManager.figuresCollection.push(black_pawn_4);
		BoardManager.figuresCollection.push(black_pawn_5);
		BoardManager.figuresCollection.push(black_rook);
		BoardManager.figuresCollection.push(black_knight);
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
			
			if (figureColor == playerOnTurn) {
				figure.setSelected();
				BoardManager.setSelectedFigure(figure);
			}
			return figure;
		}
	}

	return false;
};

BoardManager.isFigureSelected = function () {

	for (var figure of BoardManager.figuresCollection) {
		let isSelected = figure.isSelected();
		if(isSelected) {
			return true;
		}
	}

	return false;
};

BoardManager.action = function (x, y) {console.log(BoardManager.getSelectedFigure());
	let isFigureClicked = BoardManager.isFigureClicked(x, y);
	let isSelected = BoardManager.isFigureSelected();

	if (isFigureClicked != false && isSelected) {
		const selectedFigureColor = BoardManager.getSelectedFigure().getColor();
		const clickedFigureColor =isFigureClicked.getColor();

		if (selectedFigureColor != clickedFigureColor) {
			const selectedFigureX = BoardManager.getSelectedFigure().x;
			const selectedFigureY = BoardManager.getSelectedFigure().y;
			const atackObject = {
				x: selectedFigureX,
				y: selectedFigureY,
				atackedX: x,
				atackedY: y
			};
			BoardManager.atack(atackObject);
		}
	} else if (isSelected && !isFigureClicked) {
		BoardManager.move(x, y);
	}
};

BoardManager.move = function (x, y) {
	for (const figure of BoardManager.figuresCollection) {
		if (figure.isSelected()) {
			let moved = figure.move(x, y);
			
			if (moved) {
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
};

BoardManager.atack = function (atackObject) {
	let x = BoardManager.findCoordinate(atackObject.atackedX);
	let y = BoardManager.findCoordinate(atackObject.atackedY);

	BoardManager.figuresCollection.forEach((element, index, arr) => {
		if (element.x == atackObject.x && element.y == atackObject.y) {
			let atackSucceeded = element.atack(x, y);
			
			if (atackSucceeded) {
				element.setSelected(false);

				if (element.getColor() == Config.PLAYER_COLORS.WHITE) {
					BoardManager.setPlayerOnTurn(Config.PLAYER_COLORS.BLACK);
				} else {
					BoardManager.setPlayerOnTurn(Config.PLAYER_COLORS.WHITE);
				}
				BoardManager.reRender();
			}
		}
	});
};

BoardManager.reRender = function () {
	BoardManager.context.clearRect(0, 0, 400, 400);
	BoardManager.renderTiles();
	BoardManager.renderFigures();
};

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
};

BoardManager.getPlayerOnTurn = function () {
	return this.playerOnTurn;
};

BoardManager.setPlayerOnTurn = function (color) {
	console.log("set player on turn: " + color);
	console.log("----");
	BoardManager.playerOnTurn = color;
};

BoardManager.getSelectedFigure = function () {
	return BoardManager.selectedFigure;
};

BoardManager.setSelectedFigure = function (figure) {
	BoardManager.selectedFigure = figure;
};
