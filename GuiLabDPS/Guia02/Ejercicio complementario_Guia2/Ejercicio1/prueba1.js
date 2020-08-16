var Rombo = /** @class */ (function () {
    function Rombo(diagonalVertical, diagonalHorizontal) {
        this.diagonalVertical = diagonalVertical;
        this.diagonalHorizontal = diagonalHorizontal;
    }
    Rombo.prototype.Calculo = function () {
        return this.diagonalHorizontal * this.diagonalVertical;
    };
    return Rombo;
}());
var area = new Rombo(5, 3);
console.log("Valor: " + area.Calculo());
