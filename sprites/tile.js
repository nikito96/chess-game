var Tile = function (constructorObject) {
	this.x = constructorObject.x;
	this.y = constructorObject.y;
	this.color = constructorObject.color;
	this.side = Config.TILE_SIZE;
};

Tile.prototype.render = function(context) {
	var x = this.x * this.side;
	var y = this.y * this.side;
	context.beginPath();
	context.fillStyle = this.color;
	context.fillRect(x, y, this.side, this.side);
	context.closePath();
};