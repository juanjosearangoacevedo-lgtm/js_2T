class Curso{
    #nombre;
    #codigo;
    #numCreditos;

    /**
     * @params
     * @param nombre{string} - es el nombre del curso en tipo dato de texto
     * @param codigo{string} - es el codigo indetificador del curso
     * @param numCreditos{int} - el numero de creditos del curso. Se puede usar para calcular total de creditos de un estudiante
     * 
     */

    constructor(nombre, codigo, numCreditos){
        this.#nombre = nombre;
        this.#codigo = codigo;
        this.#numCreditos = numCreditos;
    }

    set nombre(nombre){
        this.#nombre = nombre;
    }

    set codigo(codigo){
        this.#codigo = codigo;
    }

    set numCreditos(numCreditos){
        this.#numCreditos = numCreditos;
    }

    get nombre(){
        return this.#nombre;
    }

    get codigo(){
        return this.#codigo;
    }

    get numCreditos(){
        return this.#numCreditos;
    }
}

module.exports = Curso;