//Check if default data was saved to local storage
const alumnos = localStorage.getItem('alumnos');
if(alumnos === null){
    localStorage.setItem('alumnos',JSON.stringify(Alumnos));
}

//Convert to JSON
const arrayAlumnos = JSON.parse(alumnos)

const totalAlumnos = document.querySelector('#numeroTotalAlumnos');
totalAlumnos.textContent = arrayAlumnos.length;


//Por clase
const totalTigers = document.querySelector('#totalTigers');
const totalKids = document.querySelector('#totalKids');
const totalJyA = document.querySelector('#totalJyA');

let tigers= [];
let kids = [];
let JyA = [];

const count = arrayAlumnos.filter(alumno => {
    if(alumno.edad >= 3 && alumno.edad <7){
        tigers.push(alumno);
    }else if(alumno.edad >=7 && alumno.edad < 13){
        kids.push(alumno);
    }else if(alumno.edad >= 13 ){
        JyA.push(alumno);
    }
})


totalTigers.textContent = tigers.length;
totalKids.textContent = kids.length;
totalJyA.textContent = JyA.length;




//CRUD

function createAlumno(){

}

function updateAlumno(){}


function deleteAlumno(){}