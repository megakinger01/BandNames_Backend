const BandList = require('./band-list');


class Sockets {

    constructor( io ) {

        this.io = io;

        this.bands = new BandList();

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {
            console.log('Cliente Conectado');

            socket.emit( 'currents-bands', this.bands.getBands() )

            socket.on('votar-banda' ,(id) => {
               this.bands.increaseVotes( id )
               this.io.emit( 'currents-bands', this.bands.getBands()) 
            })

            socket.on( 'borrar-banda', (id) => {
                this.bands.removeBand( id )
                this.io.emit( 'currents-bands', this.bands.getBands()) 
            })

            socket.on( 'cambiar-nombre',  ({id, nombre} )=> {
                // console.log(id, nombre);
                this.bands.changeName( id, nombre)
                this.io.emit( 'currents-bands', this.bands.getBands())
               
            })

            socket.on('agregar-banda' , ({nombre})=> {
                this.bands.addBand(nombre)
                this.io.emit('currents-bands', this.bands.getBands())
            })
        
            
        
        });
    }


}


module.exports = Sockets;