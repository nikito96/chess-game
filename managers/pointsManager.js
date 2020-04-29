var PointsManager = function () {
    this.whitePlayerPoints = 0;
    this.blackPlayerPoints = 0;
    this.whitePointsLabel = document.getElementById("whitePoints");
    this.blackPointsLabel = document.getElementById("blackPoints");
}

PointsManager.prototype.increasePoints = function (player, points) {
    if (player == Config.PLAYER_COLORS.WHITE) {
        this.whitePlayerPoints = this.whitePlayerPoints + points;
        this.whitePointsLabel.innerHTML = this.whitePlayerPoints;
    } else {
        this.blackPlayerPoints = this.blackPlayerPoints + points;
        this.blackPointsLabel.innerHTML = this.blackPlayerPoints;
    }
};
