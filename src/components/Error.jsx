import React, { Fragment } from "react";


const Error = ({esError, errorTexto}) => {


    return (
        <Fragment>
            {
              esError ? <div id='alerta' className="alert alert-danger" role="alert">
                {errorTexto}
              </div> : null

            }
        </Fragment>
    );
}

export default Error;