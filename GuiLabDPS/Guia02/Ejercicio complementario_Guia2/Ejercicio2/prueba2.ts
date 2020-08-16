
    interface Heroe {
        nombre:string;
        poderes:string[];
    }

    var spiderman = {
        nombre: "Peter parket",
        poderes: ["trepar", "fuerza", "agilidad", "telas de araña"]
    };
    
    function hero(Heroe: Heroe) {
      console.log("Los poderes de" + Heroe.nombre + " son " + Heroe.poderes);
    }

    hero(spiderman);


      