import React, { Fragment } from "react";
import PersonajeFavorito from "./PersonajeFavorito";


const Favoritos = ({ favoritos, eliminarFavoritos }) => {
    
    return (
        <Fragment>
            {

                favoritos.map(favorito =>
                    <PersonajeFavorito 
                        key={favorito.id} 
                        favorito={favorito}
                        eliminarFavoritos = {eliminarFavoritos}
                    />
                )
            }
        </Fragment>
    );
}

export default Favoritos;