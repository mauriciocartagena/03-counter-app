import '@testing-library/jest-dom';
const { getUser,getUserActivo } = require("../../bases/05-funciones");


describe('Pruebas em 05-funciones',()=>{
    
    test('getUser debe retornar un obejeto ', () => {
        
        const userTest = {
            uid:'ABCD123',
            username:'El?Papi1502',
        }   
        const user = getUser();
        
        expect( user ).toEqual( userTest );
    
    })
    //getUsuarioActivo debe de retornar un objeto
    test('getUsuarioActivo debe de retornar un objeto',()=>{
        
        const nombre = 'Mauricio'
        
        const userTest = {
            uid:'ABC567',
            username:nombre
        }

        const user = getUserActivo(nombre);

        expect( user ).toEqual(userTest);

        // expect(user).toEqual({
        //     uid:'ABC567',
        //     username:nombre
        // });

    });
    
});
