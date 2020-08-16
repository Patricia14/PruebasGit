var Empleado = /** @class */ (function () {
    function Empleado(nombre, salario, iva) {
        this.nombre = nombre;
        this.salario = salario;
        this.iva = iva;
    }
    Empleado.prototype.Calculo = function () {
        return this.salario - this.iva;
    };
    return Empleado;
}());
var Paga = new Empleado("Ernesto", 1000, 0.13);
console.log("Empleado:" + Paga.nombre);
console.log("Salario:$" + Paga.salario);
console.log("Descuento:" + Paga.iva + "%");
console.log("Total a pagar con descuento:$" + Paga.Calculo());
