class Calculadora {
    numero1:number;
    numero2:number;
   
    
    constructor (numero1:number, numero2: number){
        this.numero1 = numero1;
        this.numero2 = numero2;
      }
      
    suma():number{
        return this.numero1+this.numero2;
    }
    resta():number{
        return this.numero1-this.numero2;
    }
    multi():number{
        return this.numero1*this.numero2;
    }
    division():number{
        return this.numero1/this.numero2;
    }
  
 }

 let Datos = new Calculadora(200,10);

console.log("Datos ingresados:"+Datos.numero1+","+Datos.numero2);
console.log("Operación con suma:"+Datos.suma());
console.log("Operación con resta:"+Datos.resta());
console.log("Operación con multiplicación:"+Datos.multi());
console.log("Operación con división:"+Datos.division());