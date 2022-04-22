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
        this.name = name;
        this.classes = classes
    }

}

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

//cursos
const cursoProgBasica = new ({
    name: "curso gratis de programacion basica"
})
const cursoDefinitivoHTMLO = new ({
    name: "curso definitivo de HTML y CSS"
})
const cursoPracticoHTML = new ({
    name: "curso practico de HTML y CSS"
})


class Student {
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

const juan2 = new Student({
  name: "JuanDC",
  username: "juandc",
  email: "juanito@juanito.com",
  twitter: "fjuandc",
  learningPaths: [escuelaWeb,escuelaVgs],
});

const miguelito2 = new Student({
  name: "Miguelito",
  username: "migelitofeliz",
  email: "miguelito@juanito.com",
  instagram: "migelito_feliz",
  learningPaths: [escuelaWeb,escuelaData],
});