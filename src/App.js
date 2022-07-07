import './App.css';
import React, { Fragment, useState, useEffect } from "react";
import ListaPersonajes from './components/ListaPersonajes';
import Header from './components/Header';
import Favoritos from './components/Favoritos';
import Footer from './components/Footer';
import Error from './components/Error';

function App() {

  //Se inicializa el almacenamiento local
  let favoritosIniciales = JSON.parse(localStorage.getItem("favoritos"));

  //configurar una lista vacia si no existe favoritosIniciales
  if (!favoritosIniciales) {
    favoritosIniciales = [];
  };

  //hook para favoritos
  const [favoritos, setFavoritos] = useState(favoritosIniciales);

  useEffect(() => {
    //código que se ejecuta cuando cambia el estado de la variable
    if (favoritosIniciales) {
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
    } else {
      localStorage.setItem("favoritos", JSON.stringify([]));
    };
  }, [favoritosIniciales]);


  //hook para personajes
  const [personajes, setPersonajes] = useState([]);

  //hooks para errores
  const [errorBusqueda, setErrorBusqueda] = useState(false);

  const [errorFavorito, setErrorFavorito] = useState(false);

  const [errorCantidad, setErrorCantidad] = useState(false)

  //hook para la busqueda
  const [busqueda, setBusqueda] = useState('');

  //funcion para filtrar la busqueda por personajes en la api
  const filtrar = async (terminoBusqueda) => {
    try {
      const api = await fetch('https://gateway.marvel.com/v1/public/characters?nameStartsWith=' + terminoBusqueda + '&ts=1&apikey=f727f7eff30b24367204e1fbe218c2d3&hash=281707ab170d56d315de2f3aa3a1c3ac');
      const resultado = await api.json();

      setPersonajes(resultado.data.results);

    } catch (error) {
      console.log(error);
    }
  }

  //funcion que guarda lo escrito en el buscador
  const handleChange = (e) => {
    setBusqueda(e.target.value);
  }

  //funcion para buscar
  const buscar = () => {
    filtrar(busqueda);

    if (personajes.length === 0) {
      setErrorBusqueda(true)
      return;
    }

    setErrorBusqueda(true)
  }

  const agregarFavoritos = (personaje) => {

    if (favoritos.includes(personaje)) {
      setErrorFavorito(true)
      return;
    } else if (favoritos.length === 5) {
      setErrorCantidad(true)
      return;
    }

    setFavoritos([
      ...favoritos,
      personaje
    ])

    setErrorFavorito(false)

    setErrorCantidad(false)
  }

  const eliminarFavoritos = (id) => {
    const nuevaListaDeFavoritos = favoritos.filter(fav => fav.id !== id);
    setFavoritos(nuevaListaDeFavoritos);
  }


  return (
    <Fragment>
      <Header
        busqueda={busqueda}
        handleChange={handleChange}
        buscar={buscar}
      />
      <div className="container  pt-5">
        <div className='row'>
          <div className="col">
            <ListaPersonajes
              personajes={personajes}
              agregarFavoritos={agregarFavoritos}
            />

            <Error
              esError={errorBusqueda}
              errorTexto={"No existe personaje con ese nombre"}
            />
          </div>
          <div className="col-3">
            <div id='favoritos'>
              <h2>Mis 5 Favoritos</h2>
              <Favoritos
                favoritos={favoritos}
                eliminarFavoritos={eliminarFavoritos}
              />
              <Error
                esError={errorFavorito}
                errorTexto={"Este personaje ya está en favoritos"}
              />

              <Error
                esError={errorCantidad}
                errorTexto={"Ya hay 5 favoritos, elimina uno si quieres poner a este personaje"}
              />

            </div>
          </div>
        </div>
      </div>

      <Footer />

    </Fragment>
  )
}

export default App;
