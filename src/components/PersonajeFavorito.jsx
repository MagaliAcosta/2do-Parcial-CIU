import React, {Fragment} from "react";
import { Button, Row, Col } from "react-bootstrap";

const PersonajeFavorito = ({favorito, eliminarFavoritos}) => {
    return (
        <Fragment>
            <Row>
                <Col id="personajeFav" className="col">
                {favorito.name}
                </Col>
                <Col className="col-1">
                <Button 
                    id="botonEliminar" 
                    variant="danger"
                    onClick={() => eliminarFavoritos(favorito.id)}
                >
                    <img id="imgEliminar" src="https://ouch-cdn2.icons8.com/UUFfF8kTnTE3T92c_o2RPZ7kzfEAEgzaYolmohOo-Qg/rs:fit:293:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvOTY0/LzU0NzhkNDAyLTI0/MWItNDg4NC05YzBj/LWFjYjcwMzE3Y2Y0/ZC5zdmc.png" alt="" />
                </Button>
                </Col>
            </Row>
            
        </Fragment>
    );
}

export default PersonajeFavorito;