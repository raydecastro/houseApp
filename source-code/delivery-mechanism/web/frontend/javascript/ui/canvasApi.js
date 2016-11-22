'use strict';

var love = love || {};

(function(namespace) {
  namespace.CanvasApi = CanvasApi;

  function CanvasApi(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.context = this.canvas.getContext("2d");
  }

  CanvasApi.prototype.drawCircle = function (x, y, r, color) {
    this.context.strokeStyle = color;
    this.context.beginPath();
    this.context.arc(x, y, r, 0, 2 * Math.PI);
    this.context.stroke();
  };

  CanvasApi.prototype.drawCrossHairs = function (x, y, color) {
    this.context.strokeStyle = color;
    this.context.beginPath();
    this.context.moveTo(x, y);
    this.context.lineTo(x+9, y);
    this.context.lineTo(x-18, y);
    this.context.moveTo(x, y);
    this.context.lineTo(x, y+9);
    this.context.lineTo(x, y-18);
    this.context.moveTo(x, y);
    this.context.stroke();
  };

  CanvasApi.prototype.drawRectangle = function (x, y, width, height, color) {
    this.context.fillStyle = color;
    this.context.fillRect(x, y, width, height);
  };

  CanvasApi.prototype.drawTriangle = function (x1, y1, x2, y2, x3, y3, color) {
    this.context.fillStyle = color;
    this.context.moveTo(x1, y1);
    this.context.lineTo(x2, y2);
    this.context.lineTo(x3, y3);
    this.context.closePath();

    this.context.stroke();
    this.context.fill();
  };

  CanvasApi.prototype.drawGrid = function () {
    var gridWidth = 1024;
    var gridHeight = 768;

    this.context.setLineDash([5, 10]);

    var x, p = 0;
    for (x = 0; x <= gridWidth; x += 50) {
      this.context.moveTo(0.5 + x + p, p);
      this.context.lineTo(0.5 + x + p, gridHeight + p);
    }


    for (x = 0; x <= gridHeight; x += 50) {
      this.context.moveTo(p, 0.5 + x + p);
      this.context.lineTo(gridWidth + p, 0.5 + x + p);
    }

    this.context.strokeStyle = "gray";
    this.context.stroke();
  };

})(love);
