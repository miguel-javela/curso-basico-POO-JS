class Comment {
    constructor({
        content,
        studentName,
        studentRole = "estudiante"
    }){
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.content = content;
        this.likes = 0;

    }

    publicar(){
        console.log(this.studentName + ' (' + this.studentRole + ")");
        console.log(this.likes + "likes");
        console.log(this.content);
    }
}

class PlatziClass {
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
        classes = [],
        isFree = false,
        lang = "spanish"
    }) {
        this._name = name;//raya al piso indica que no deberia ser llamado desde afuera(privado)
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
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
    name: "curso gratis de programacion basica",
    isFree: true
});
const cursoDefinitivoHTMLO = new Course({
    name: "curso definitivo de HTML y CSS"
});
const cursoPracticoHTML = new Course({
    name: "curso practico de HTML y CSS",
    lang: "english"
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

class StudentMama {
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

  publicarComentario(commentContent){
      const comment = new Comment({
          content: commentContent,
          studentName: this.name
      });
      comment.publicar();
  }
}

class FreeStudent extends StudentMama{
    constructor(props){
        super(props)
    }
    AproveCourses(newCourse){
        if(newCourse.isFree){
            this.approvedCourses.push(newCourse)
        } else {
            console.warn("lo sentimos, " + this.name+ ", solo puedes tomar cursos abiertos");
        }
    }
}

class BasicStudent extends StudentMama{
    constructor(props){
        super(props)
    }
    AproveCourses(newCourse){
        if(newCourse.lang !== "english"){
            this.approvedCourses.push(newCourse)
        } else {
            console.warn("lo sentimos, " + this.name+ ", no puedes tomar cursos en eingles");
        }
    }
}

class ExpertStudent extends StudentMama{
    constructor(props){
        super(props)
    }
    AproveCourses(newCourse){
        this.approvedCourses.push(newCourse);

    }
}

class TeacherStudent extends StudentMama{
    constructor(props){
        super(props)
    }

    AproveCourses(newCourse){
        this.approvedCourses.push(newCourse);

    }

    publicarComentario(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: "profesor"
        });
        comment.publicar();
    }
}

const juan2 = new FreeStudent({
  name: "JuanDC",
  username: "juandc",
  email: "juanito@juanito.com",
  twitter: "fjuandc",
  learningPaths: [escuelaWeb,escuelaVgs],
});

const miguelito2 = new BasicStudent({
  name: "Miguelito",
  username: "migelitofeliz",
  email: "miguelito@juanito.com",
  instagram: "migelito_feliz",
  learningPaths: [escuelaWeb,escuelaData],
});

const fredy = new TeacherStudent({
    name: "fredy vega",
    username: "freddiert",
    email: "fredy@juanito.com",
    instagram: "freddiert",
  });