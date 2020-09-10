import { getHeroesById } from './08-imp-exp'


export const getHeroeByIdAsync = (id) =>{
    return new Promise( (resolve,reject) => {

        setTimeout(() => {
          
            const heroe = getHeroesById(id);
            if(heroe){
                resolve(heroe);
            }
            else{
                reject('Nose pudo encontrar el héroe');
            }
        }, 1500);
    });
}