import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Pruebas en el CounterApp', () => {


    let wrapper = shallow(<CounterApp/>); //undefined

    // sirve para que se ejecute antes de cada uno de los test
    beforeEach( () =>{
         wrapper = shallow(<CounterApp/>);
    })

    test('Debe de mostar <CounterApp /> correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();
        
    });
    test('Debe de mostar por defecto 100 ', () => {
        
        const wrapper = shallow(<CounterApp value={ 100 }/>);

        const counterText = wrapper.find('h2').text().trim();
        // console.log(counterText);

        expect(counterText).toBe('100')
        
    })
    test('debe de incrementar con el bóton +1', () => {

        // const btn1 = wrapper.find('button').at(0);
        // console.log(btn1.html());

        wrapper.find('button').at(0).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe('11');

    });

    test('debe de decrementar con el bóton -1', () => {

        // const btn1 = wrapper.find('button').at(0);
        // console.log(btn1.html());

        wrapper.find('button').at(2).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe('9');
    });

    test('debe de colocar el valor por defecto con el btn reset', () => {
        
        const wrapper = shallow(<CounterApp value={ 105 }/>);
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const counterText = wrapper.find('h2').text().trim();
        // console.log(counterText);

        expect(counterText).toBe("105");





    });
    

    

})


