class Empleado {
    nombre:string;
    salario:number;
    iva:number;
    
    constructor (nombre:string, salario: number, iva:number){
        this.nombre = nombre;
        this.salario = salario;
        this.iva=iva;
      }
      
    Calculo():number{
        return this.salario-this.iva;
    }
  
 }

 let Paga = new Empleado("Ernesto",1000,0.13);

console.log("Empleado:"+Paga.nombre);
console.log("Salario:$"+Paga.salario);
console.log("Descuento:"+Paga.iva+"%");
console.log("Total a pagar con descuento:$"+Paga.Calculo());