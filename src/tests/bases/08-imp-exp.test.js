import '@testing-library/jest-dom';
import { getHeroesById,getHeroesByOwner } from '../../bases/08-imp-exp';
import heroes from '../../data/heroes';


describe('Prubas en funciones de Héroes',()=>{

    test('debe de retornar un héroe por id ', () => {
        
        const id = 1;
        const heroe = getHeroesById( id );

        const heroData = heroes.find(h =>h.id === id );

        expect( heroe ).toEqual( heroData );

    });

    test('debe de retornar un undefined si Héroe no existe ', () => {
        
        const id = 10;
        const heroe = getHeroesById( id );

        expect( heroe ).toBe( undefined );

    });

    test('debe de retornar un arreglo con los Héroes de DC',()=>{

        const owner = 'DC';

        const heroes = getHeroesByOwner( owner );

        const heroesData = heroes.filter((h) => h.owner === owner);

        
        expect( heroes ).toEqual( heroesData );

    });

    test('Debe de retornar un arreglo con los héroes de Marvel',()=>{

        const owner = 'Marvel';

        const heroes = getHeroesByOwner(owner);

        const heroesData = heroes.filter((h)=>h.owner === owner);

        expect( heroes ).toEqual( heroesData );
        
    });
    test('Debe de retornar un arreglo con los héroes de Marvel con length 2',()=>{

        const owner = 'Marvel';

        const heroes = getHeroesByOwner(owner);

        expect( heroes.length ).toBe( 2 );
        
    });



    

});