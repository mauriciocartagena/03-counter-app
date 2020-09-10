

//Funciones en JS
// const saludar = function(nombre) {
//     return `Hola ${ nombre }`;
// } 

const saludar2 = ( nombre )=>{
    return `Hola ${ nombre }`;
}

const saludar3 = ( nombre )=> `Hola ${ nombre }`;
const saludar4 = ()=> `Hola Mundo`;


export const getUser = () =>(
    {
        uid:'ABCD123',
        username:'El?Papi1502'
    }
)

//Tarea
export function getUserActivo(nombre){
    return {
        uid:'ABC567',
        username:nombre
    }
};

