import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


// FC Functional Component
const PrimeraApp = ( { saludo,subtitle } ) => {



    return(
        <Fragment>
            <h1> { saludo } </h1>
            {/* <pre>{ JSON.stringify( saludo, null, 3 ) }</pre> */}
            <p> { subtitle } </p>
        </Fragment>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps={
    subtitle:'Soy un subtitulo',
}

export default PrimeraApp;