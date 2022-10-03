class SpaceShip {
    constructor(name, maxCrew, maxVelocidade){
       this.name = name
       this.maxCrew = maxCrew
       this.maxVelocidade = maxVelocidade 
       this.currentVelocity = 0
    }

    speedUp(acceleration){
        this.currentVelocity += acceleration
        if(this.currentVelocity > this.maxVelocidade){
            console.log("Velocidade máxima ultrapassada. Diminua")
        }
    }
}

class TransportSpaceship extends SpaceShip {
    constructor(name, maxCrew, maxVelocidade, maxCarga){
        super(name, maxCrew, maxVelocidade)
        this.maxCarga = maxCarga
    }

    speedUp(acceleration){
        acceleration /= 2
        console.log("Incrementando velocidade em " + acceleration + "km/s")
        super.speedUp(acceleration)
    }
}

let transportSpaceship = new TransportSpaceship("Transportadora", 4, 100, 400)

console.log(transportSpaceship)

transportSpaceship.speedUp(210)