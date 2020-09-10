import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <Primer App>', () => {
    
    // test('Debe de mostar el mensaje de "Hola, Soy Goku"', () => {
    //     const saludo = 'Hola, so Goku';
    //     const { getByText  } = render(<PrimeraApp saludo={ saludo }  ></PrimeraApp>)
    //     expect(getByText( saludo )).toBeInTheDocument();
    // })

    test('debe de mostar <PrimeraApp /> correctamente', () => {

        const saludo = 'Hola soy Goku';
        const wrapper = shallow(<PrimeraApp saludo={ saludo } />);

        expect( wrapper ).toMatchSnapshot();


    })

    test('Debe de mostar el subtitulo enviado por props', () => {

        const saludo = 'Hola soy Goku';

        const subTitulo = 'Soy un subtitulo'

        const wrapper = shallow(
            <PrimeraApp 
                saludo={ saludo }
                subtitle={ subTitulo } 
            />
        );

        const textoParrafo = wrapper.find('p').text();
        expect( textoParrafo ).toBe( subTitulo );

    })
    
    
    

});
