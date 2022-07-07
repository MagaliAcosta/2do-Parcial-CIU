import React, { Fragment } from "react";
import Personaje from "./Personaje";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row} from 'react-bootstrap';

const ListaPersonajes = ({personajes, agregarFavoritos}) => {


    return (
        <Fragment>
            <Row xs={1} md={2} className="g-4">
                {
                    
                    personajes.map(personaje => 
                        <Personaje 
                            key={personaje.id} 
                            personaje={personaje} 
                            agregarFavoritos={agregarFavoritos}
                        />
                    )
                }
            </Row>
        </Fragment>
    );
}

export default ListaPersonajes;