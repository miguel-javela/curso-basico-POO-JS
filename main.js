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