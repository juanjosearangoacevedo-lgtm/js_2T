const Curso = require('./Curso.js');
const Estudiante = require('./Estudiante.js');

const curso1 = new Curso('Javascript','ADSO-1',3);
const curso2 = new Curso('Bases de datos','ADSO-2',3);
const curso3 = new Curso('Python OO','ADSO-3',3);

let listadoCursos1erTrim = [curso1,curso2,curso3];

const estudiante1 = new Estudiante('Mauricio Rivero','sen1','ADSO');
const estudiante2 = new Estudiante('Bryan Cordoba','sen2','ADSO');
const estudiante3 = new Estudiante('Mauricio Orlando','sen3','ADSO');
const estudiante4 = new Estudiante('Ana Aguilar','sen4','ADSO');

console.log('El código de estudiante 1 es: '+estudiante1.codigoEstudiantil);

estudiante1.curso(curso1);
estudiante1.curso(curso2);

function mostrarCursosPorEstudiante(estudiante) {
    console.log('Los cursos del estudiante ' + estudiante.nombre + ' son:');
    let cursos = estudiante.cursosMatriculados; 
    for (let i = 0; i < cursos.length; i++) {
        console.log(`- ${cursos[i].nombre} | Código: ${cursos[i].codigo} | Créditos: ${cursos[i].numCreditos}`);
    }
}mostrarCursosPorEstudiante(estudiante1);