class Rombo {
    diagonalVertical:number;
    diagonalHorizontal:number;
    
    constructor (diagonalVertical:number, diagonalHorizontal: number){
        this.diagonalVertical = diagonalVertical;
        this.diagonalHorizontal = diagonalHorizontal;
      }
      
    Calculo():number{
        return this.diagonalHorizontal*this.diagonalVertical;
    }
  
 }

 let area = new Rombo(5,3);

console.log("Valor: "+area.Calculo());

