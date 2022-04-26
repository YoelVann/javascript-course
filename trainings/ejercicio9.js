// @ Author: Joel Isaac Hoil Calderón, August 2021.
/*
La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
*/

class Pelicula {

    constructor({
        id,
        title,
        director,
        premiereYear,
        countries,
        gender,
        qualification
    }) {
        this.id = id;
        this.title = title;
        this.director = director;
        this.premiereYear = premiereYear;
        this.countries = countries;
        this.gender = gender;
        this.qualification = qualification;

        this.validateId(id);
        this.validateTitle(title);
        this.validateDirector(director)
        this.validateYear(premiereYear);
        this.validateCountries(countries);
        this.validateGender(gender);
        this.validateQualification(qualification);
    }

    validateId = (id) => {
        const regExp = /^([a-z]{2})([0-9]{7})$/;
        if (!regExp.test(id)) {
            console.warn(`El id ${ id } no es un ID Válido`);
        }
    }

    validateTitle = (title) => {
        if (!(this.validateLength(title, 100))) return console.warn("El título no debe de rebasar 100 caracteres");
    }
    validateDirector = (director) => {
        if (!(this.validateLength(director, 50))) return console.warn("El Director no debe de rebasar 50 caracteres");
    }

    validateYear = (premiereYear) => {

        if (typeof(premiereYear) !== 'number') {
            console.log("el año debe ser tipo numérico");
        }
        if (!/^[0-9]{4}$/.test(premiereYear)) {
            console.log("el año debe tener 4 dígitos");
        }
    }

    validateCountries = (countries) => {
        this.isArray(countries);
    }

    validateGender = (gender) => {

        this.isArray(gender);

        for (let index = 0; index < gender.length; index++) {
            if (!(Pelicula.acceptGenders().find((genderElement) => genderElement === gender[index]))) {
                return console.log(`${gender[index]} no es un género válido en [${gender}]`);
            }
        }
    }

    validateQualification = (qualification) => {

        this.isNumber(qualification);

        return (qualification < 0 || qualification > 10) ?
            console.error("la calificacion debe se estar entre 0 y 10") :
            this.qualification = qualification.toFixed(1);
    }

    static get genders() {
        return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];
    }

    static acceptGenders() {
        return Pelicula.genders;
    }


    isArray = (arrayElement) => {
        if (!(arrayElement instanceof Array)) return console.log(`el elemento ${ arrayElement } no es un array`)
    }

    isNumber = (number) => {
        if (typeof(number) !== 'number') return console.log(`el número ${number} no es del tipo numérico`);
    }

    validateLength = (element, limitLength) => {
        if (element.length > limitLength) { return false } else { return true };
    }

}

// const peli = new Pelicula(id = "ab1234567", title = "Romance of Me", director = "Manace", premiereYear = 1994, countries = ["Mexico", "United States"], gender = ["Action", "Adult"], qualification = 9.233);

const misPelis = [{
        id: "ab1234567",
        title: "Romance of Me",
        director: "Manace",
        premiereYear: 1994,
        countries: ["Mexico", "United States"],
        gender: ["Action", "Adult"],
        qualification: 9.233
    },
    {
        id: "ab1234567",
        title: "Romance of Me 2",
        director: "Manace",
        premiereYear: 2000,
        countries: ["Mexico", "United States"],
        gender: ["Action", "Adult"],
        qualification: 9.233
    },
    {
        id: "ab1234567",
        title: "Romance of Me 3",
        director: "Manace",
        premiereYear: 2020,
        countries: ["Mexico", "United States"],
        gender: ["Action", "Adult"],
        qualification: 9.233
    },

];

misPelis.forEach(peli => {
    new Pelicula(peli);
    fichaPelicula(peli);
});

function fichaPelicula(Pelicula) {
    console.info(
        `
        Nombre: ${Pelicula.title}
        Director: ${Pelicula.director}
        Id: ${Pelicula.id}
        Año: ${Pelicula.premiereYear}
        País(es): ${Pelicula.countries.join(", ")}
        Género(os): ${Pelicula.gender.join(", ")}
        Calificación: ${Pelicula.qualification}
        `
    );
}