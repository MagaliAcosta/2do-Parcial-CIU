import React, { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, ListGroup, Button } from 'react-bootstrap';

const Personaje = ({ personaje, agregarFavoritos }) => {

    var path = personaje.thumbnail.path;
    var extension = personaje.thumbnail.extension;

    var imagen = (path + "." + extension);
    var nombre = personaje.name;



    return (
        <Fragment>
            <Card id="carta">
                <Card.Img id="imagenPersonaje" variant="top" src={imagen} alt={nombre} />
                <Card.Body>
                    <div >
                        <Card.Title >{nombre}</Card.Title>
                    </div>
                </Card.Body>
                <ListGroup id="listaCarta">
                        <ListGroup.Item id="itemLista">
                            Comics que aparece: <br></br>
                            <strong> {personaje.comics.available} </strong>
                        </ListGroup.Item>
                        <ListGroup.Item id="itemLista">
                            Historias que aparece: <br></br>
                            <strong> {personaje.stories.available} </strong>
                        </ListGroup.Item>
                        <ListGroup.Item id="itemLista">
                            Series que aparece: <br></br>
                            <strong> {personaje.series.available} </strong>
                        </ListGroup.Item>
                    </ListGroup>
                <Button
                        type="submit"
                        id="botonFav"
                        onClick={() =>agregarFavoritos(personaje)}
                    >
                        <img id="imagenFav" src="https://cdn-0.emojis.wiki/emoji-pics/facebook/white-heart-facebook.png" alt="" />
                        Favorito
                    </Button>
            </Card>
        </Fragment>
    );
}

export default Personaje;