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
		var pawnConstructor = {
			type: Config.WHITE_FIGURES.PAWN,
			color: Config.FIGURES_COLORS.WHITE,
			x: 0,
			y: 0
		};

		var pawn = new Figure(pawnConstructor);
		pawn.render(BoardManager.context);
	};

	loadFigures();
};
