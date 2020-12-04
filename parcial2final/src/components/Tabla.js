import React, { useEffect, useState } from "react";
import { Table, Card, Button, Badge } from "react-bootstrap";
//import Detail from "./Detail";
import useData from "./useData";
import { FormattedDate, FormattedPlural, FormattedNumber } from "react-intl";

function Tabla() {
  let hola = {};
  let count = 0;
  const [data] = useData();
  const [selectedData, setSelectedData] = useState([]);
  function showDetail(movie) {
    hola = movie;
    setSelectedData(movie);
    setSelectedData(movie);
  }

  function Detail() {
    if(selectedData.name!=undefined){
    return (
      <div>
        <Card style={{ width: "90%" }}>
          <Card.Img variant="top" src={selectedData.poster} />
          <Card.Body>
            <Card.Title>{selectedData.name}</Card.Title>
            <Card.Text>{selectedData.description}</Card.Text>
            <Card.Text>Cast: {selectedData.cast}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );}
    else{
      return(<div></div>);
    }
  }

  return (
    <div>
      <h1 style={{textAlign: "left"}}>{Title()}</h1>
      <div className="row">
        <div className="col-10">
          <Table striped bordered hover>
            <thead className="thead-dark">{TableHeaders()}</thead>
            <tbody>
              {data.map((movie) => {
                count += 1;
                return (
                  <tr onClick={() => showDetail(movie)}>
                    <td key={"c" + count}> {count}</td>
                    <td key={movie.ThumbnailImage}><img src={movie.ThumbnailImage} height="60px" /></td>
                    <td key={movie.name}>{movie.name}</td>
                    <td key={movie.description}>{movie.description}</td>
                    <td key={"bud" + movie.height}>
                    <FormattedNumber value={movie.height} />
                      
                    </td>
                    <td key={"bud" + movie.weight}>
                    <FormattedNumber value={movie.weight}/>
                      
                    </td>
                    <td key={movie.views}>{movie.type.map((tipo)=>{
                      return(
                        <Badge variant="secondary">{tipo}</Badge>
                      );
                    })}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
        <div className="col-4" id="detail">
          
        </div>
      </div>
    </div>
  );
}

function Title(){
  if (navigator.language.startsWith("es") ) {
    return "Pokemóns más buscados";
  }
  else{
    return "Most wanted Pokemons"
  }
}

function Plural(){
  if (navigator.language.startsWith("es") ) {
    return ["millon", "millones"];
  }
  else{
    return ["million", "millions"]
  }
}

function TableHeaders() {
  if (navigator.language.startsWith("es") ) {
    console.log("entre");
    return (
      <tr>
        <th>#</th>
        <th>Imagen</th>
        <th>Nombre</th>
        <th>Descripción</th>
        <th>Altura</th>
        <th>Peso</th>
        <th>Tipo</th>
      </tr>
    );
  } else {
    return (
      <tr>
        <th>#</th>
        <th>Image</th>
        <th>Name</th>
        <th>Description</th>
        <th>Height</th>
        <th>Weight</th>
        <th>Type</th>
      </tr>
    );
  }
}

export default Tabla;
