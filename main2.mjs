export class PlatziClass {
    constructor({
        name,
        videoId
    }){
        this.name = name;
        this.videoId = videoId
    }
    reproducir(){
        videoPlay(this.videoId)
    }
    pausar(){
        videoStop(this.videoId)
    }
}

function videoPlay(id){
    const urlSecreta = "http"+id;
    console.log("se esta reproduciendo desde la URL "+urlSecreta)
}
function videoStop(id){
    const urlSecreta = "http"+id;
    console.log("se pauso desde la URL "+ urlSecreta)
}

class LearningPath {
    constructor({
        name,
        courses = []
    }) {
        this.name = name;
        this.courses = courses
    }

}

class Course {
    constructor({
        name,
        classes = []
    }) {
        this._name = name;//raya al piso indica que no deberia ser llamado desde afuera(privado)
        this.classes = classes
    }
    get name (){
        return this._name;
    }
    set name(nuevoNombre){
        if(nuevoNombre === "Curso malito"){
            console.error("no llamar asi")
        } else {
            this._name = nuevoNombre;
        }
        
    }
}
//cursos
const cursoProgBasica = new Course({
    name: "curso gratis de programacion basica"
});
const cursoDefinitivoHTMLO = new Course({
    name: "curso definitivo de HTML y CSS"
});
const cursoPracticoHTML = new Course({
    name: "curso practico de HTML y CSS"
});

//escuelas
const escuelaWeb = new LearningPath({
    name: "Escuela de desarrollo web",
    courses: [cursoProgBasica,cursoDefinitivoHTMLO,cursoPracticoHTML]
});
const escuelaData = new LearningPath({
    name: "Escuela de Data Sciente",
    courses: ["curso DataBusiness","curso Datavi<"]
});
const escuelaVgs = new LearningPath({
    name: "Escuela de video juevos",
    courses: ["curso unity","curso de unreal"]
});

class Student3 {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}

const juan2 = new Student3({
  name: "JuanDC",
  username: "juandc",
  email: "juanito@juanito.com",
  twitter: "fjuandc",
  learningPaths: [escuelaWeb,escuelaVgs],
});

const miguelito2 = new Student3({
  name: "Miguelito",
  username: "migelitofeliz",
  email: "miguelito@juanito.com",
  instagram: "migelito_feliz",
  learningPaths: [escuelaWeb,escuelaData],
});