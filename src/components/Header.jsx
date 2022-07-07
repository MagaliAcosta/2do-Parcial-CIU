import React, { Fragment } from "react";
import Busqueda from "./Busqueda";


const Header = ({ busqueda, handleChange, buscar }) => {


    return (
        <Fragment>
            <header>
                <div className="container justify-content-md-center p-1">
                    <div className="row">
                        <div className="col">
                            <h1 id="titulo" className="p-1 pb-0">MARVEL-LA</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <Busqueda
                                busqueda={busqueda}
                                handleChange={handleChange}
                            />
                        </div>
                        <div className="col-1">
                        <button
                                id="botonBusqueda"
                                className="btn"
                                onClick={buscar}
                            >
                                Buscar
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </Fragment>
    );
}

export default Header;