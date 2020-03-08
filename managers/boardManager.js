var BoardManager = {};

BoardManager.init = function (canvas) {
	this.canvas = canvas;
	this.context = this.canvas.getContext("2d");
	this.tilesCollection = [];
	this.figuresCollection = [];

	for (var i = 0; i < 10; i++) {
		for (var j = 0; j < 10; j++) {
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

BoardManager.loadBoard = function () {
	var loadTiles = function () {
		for (var i = 0; i < BoardManager.tilesCollection.length; i++) {
			BoardManager.tilesCollection[i].render(BoardManager.context);
		}
	};

	loadTiles();

	var loadFigures = function () {
		var pawnWhiteConstructor_1 = {
			type: Config.WHITE_FIGURES.PAWN,
			color: Config.FIGURES_COLORS.WHITE,
			x: 0,
			y: 1
		};

		var pawnWhiteConstructor_2 = {
			type: Config.WHITE_FIGURES.PAWN,
			color: Config.FIGURES_COLORS.WHITE,
			x: 1,
			y: 1
		};

		var pawnWhiteConstructor_3 = {
			type: Config.WHITE_FIGURES.PAWN,
			color: Config.FIGURES_COLORS.WHITE,
			x: 2,
			y: 1
		};

		var pawnWhiteConstructor_4 = {
			type: Config.WHITE_FIGURES.PAWN,
			color: Config.FIGURES_COLORS.WHITE,
			x: 3,
			y: 1
		};

		var pawnWhiteConstructor_5 = {
			type: Config.WHITE_FIGURES.PAWN,
			color: Config.FIGURES_COLORS.WHITE,
			x: 4,
			y: 1
		};

		var pawn_1 = new Figure(pawnWhiteConstructor_1);
		var pawn_2 = new Figure(pawnWhiteConstructor_2);
		var pawn_3 = new Figure(pawnWhiteConstructor_3);
		var pawn_4 = new Figure(pawnWhiteConstructor_4);
		var pawn_5 = new Figure(pawnWhiteConstructor_5);
		BoardManager.figuresCollection.push(pawn_1);
		BoardManager.figuresCollection.push(pawn_2);
		BoardManager.figuresCollection.push(pawn_3);
		BoardManager.figuresCollection.push(pawn_4);
		BoardManager.figuresCollection.push(pawn_5);

		for (var i = 0; i < BoardManager.figuresCollection.length; i++) {
			BoardManager.figuresCollection[i].render(BoardManager.context);
		}
	};

	loadFigures();
};
