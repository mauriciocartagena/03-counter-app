import '@testing-library/jest-dom';  

import { getSaludo } from '../../bases/03-template-string'

describe('Prueba en 03-template-string.js',()=>{

    test('getSaludo debe de retornar Hola Mauricio!',()=>{

        const nombre = 'Mauricio';
        
        const saludo = getSaludo(nombre);
        
        expect( saludo ).toBe( 'Hola ' + nombre + '!' );

    });

    //getSaludo debe de retornar Hola Carlos! si no ahy argumento nombre

    test('getSaludo debe de retornar Hola Carlos! si no ahy argumento nombre',()=>{

        const saludo = getSaludo();
        
        expect(saludo).toBe('Hola Carlos!');

    });


});
