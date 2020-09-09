import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

//FC Functional componet 
//rafcp se crea un functional component mas su proptypes
const CounterApp = ( { value = 10 } ) =>{
    
    const [ counter,setCounter ] = useState( value ); //[]
    
    //handleAdd
    const handleAdd = ()=>{
        setCounter( counter + 1 );
        // setCounter( (c)=>c+1 );
    }
    const handleReset = () =>{
        setCounter(value);
    }   
    const handleRest = () =>{
        setCounter( counter - 1 );
    }


    return (
        <Fragment>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
 
            <button onClick={ handleAdd } > +1 </button>
            <button onClick={ handleReset } > Reset </button>
            <button onClick={ handleRest } > -1 </button>
        </Fragment>
    );
}

CounterApp.propTypes = {
    value:PropTypes.number.isRequired,
}

export default CounterApp;