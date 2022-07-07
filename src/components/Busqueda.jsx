import React, { Fragment } from "react";


const Busqueda = ({ busqueda, handleChange}) => {


    return (
        <Fragment>
            <div id="busqueda">
                <input
                    className="form-control"
                    type="search"
                    placeholder="Escribí el nombre de un personaje"
                    value={busqueda}
                    name="busqueda"
                    onChange={handleChange}
                ></input>
                
            </div>

        </Fragment>
    );
}

export default Busqueda;