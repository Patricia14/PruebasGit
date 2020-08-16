var Calculadora = /** @class */ (function () {
    function Calculadora(numero1, numero2) {
        this.numero1 = numero1;
        this.numero2 = numero2;
    }
    Calculadora.prototype.suma = function () {
        return this.numero1 + this.numero2;
    };
    Calculadora.prototype.resta = function () {
        return this.numero1 - this.numero2;
    };
    Calculadora.prototype.multi = function () {
        return this.numero1 * this.numero2;
    };
    Calculadora.prototype.division = function () {
        return this.numero1 / this.numero2;
    };
    return Calculadora;
}());
var Datos = new Calculadora(200, 10);
console.log("Datos ingresados:" + Datos.numero1 + "," + Datos.numero2);
console.log("Operación con suma:" + Datos.suma());
console.log("Operación con resta:" + Datos.resta());
console.log("Operación con multiplicación:" + Datos.multi());
console.log("Operación con división:" + Datos.division());
