const natalia = {
    name: "natalia",
    age:20,
    cursosAprobados: [
        "curso1","curso2"
    ],
    aprobarCurso (nuevoCurso){
        this.cursosAprobados.push(nuevoCurso);
    }
};

//natalia apruebe el curso
//natalia.cursosAprobados.push("curso3");

//prototipo
function Student (name,age,cursosAprobados){
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    // this.aprobarCurso = function (nuevoCurso){
    //     this.cursosAprobados.push(nuevoCurso);
    // }
}

//agrega una metodo
Student.prototype.aproaprobarCurso = function (nuevoCurso){
    this.cursosAprobados.push(nuevoCurso);
}

const juanita = new Student ("juanita",15,["c1","c2"])

//prototipos con las sintaxis de clases
//esta sintaxis permite que cuando se instancie un objeto no sea obligatorio pasarle los parametros al constructor
//de forma ordenada
class Student2 {
    constructor({
        name,
        cursosAprobados=[],
        age,
        email
    }) {
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
        this.email = email;
    }

    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso);
    }
}

//esta sintaxis permite que cuando se instancie un objeto no sea obligatorio pasarle los parametros al constructor
//de forma ordenada
const miguelito = new Student2({
    name: "miguel",
    age: 25,
    email: "prueba"
});