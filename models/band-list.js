const Band = require('./band');



class BandList {

    constructor() {

        this.bands = [
            new Band('Megadeth'),
            new Band('Dream Theater'),
            new Band('Iron Maiden'),
            new Band('Judas Priest'),

        ]
    }
        // Métodos a usar  
        
        
    // 1) Agregar una banda 
        addBand( name ){

            const newBand = new Band( name)
            this.bands.push( newBand )
            return this.bands
        }

    // 2) borra una banda
        removeBand( id ){
             this.bands = this.bands.filter( band  => band.id !== id )
        }

    // 3) obtener todas las bandas 
        getBands(){
            return this.bands
        }

    // 4) incrementar los votos 
        increaseVotes( id ) {
            this.bands = this.bands.map( band => {

                if ( band.id === id ){
                    band.votes += 1
                }
                return band
            })
        }

    // 5) cambiar el nombre de la banda 
       changeName( id, newName  ) {
        this.bands = this.bands.map( band => {

            if ( band.id === id ) {
                band.name = newName;
            }

            return band;

        })
        }
        
        
}


module.exports = BandList;