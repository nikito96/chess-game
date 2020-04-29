var PointsManager = function () {
    this.whitePlayerPoints = 0;
    this.blackPlayerPoints = 0;
}

PointsManager.prototype.increasePoints = function (player, points) {
    if (player == Config.PLAYER_COLORS.WHITE) {
        this.whitePlayerPoints = this.whitePlayerPoints + points;
    } else {
        this.blackPlayerPoints = this.blackPlayerPoints + points;
    }
};

PointsManager.prototype.getWhitePlayerPoints = function () {
    return this.whitePlayerPoints;
};

PointsManager.prototype.getBlackPlayerPoints = function () {
    return this.blackPlayerPoints;
};
