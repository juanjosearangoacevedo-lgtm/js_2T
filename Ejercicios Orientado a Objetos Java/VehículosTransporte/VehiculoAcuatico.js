const Vehiculo = require('./Vehiculo.js');
class VehiculoAcuatico extends Vehiculo {
    #tipoPropulsion;

    /**
     * @param {string} marca
     * @param {string} modelo
     * @param {number} capacidad
     * @param {string} tipoPropulsion
     */
    constructor(marca, modelo, capacidad, tipoPropulsion) {
        super(marca, modelo, capacidad);
        this.#tipoPropulsion = tipoPropulsion;
    }

    set tipoPropulsion(tipoPropulsion) {
        this.#tipoPropulsion = tipoPropulsion;
    }

    get tipoPropulsion() {
        return this.#tipoPropulsion;
    }

    moverse() {
        return `El vehículo acuático ${this.marca} ${this.modelo} navega usando propulsión ${this.#tipoPropulsion}.`;
    }

    anclar() {
        return `${this.marca} ${this.modelo} ha soltado el ancla.`;
    }

    mostrarInformacion() {
        return `${super.mostrarInformacion()}, Propulsión: ${this.#tipoPropulsion}`;
    }
}

module.exports = VehiculoAcuatico;