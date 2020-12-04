import React, { useEffect, useState } from "react";
import { Table, Card, Button } from "react-bootstrap";
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
      <h1>{Title()}</h1>
      <div className="row">
        <div className="col-8">
          <Table striped bordered hover>
            <thead>{TableHeaders()}</thead>
            <tbody>
              {data.map((movie) => {
                count += 1;
                return (
                  <tr onClick={() => showDetail(movie)}>
                    <td key={"c" + count}> {count}</td>
                    <td key={movie.name}>{movie.name}</td>
                    <td key={movie.directedBy}>{movie.directedBy}</td>
                    <td key={movie.country}>{movie.country}</td>
                    <td key={"bud" + movie.budget}>
                    {movie.budget} <FormattedPlural
                        value={movie.budget}
                        one={Plural()[0]}
                        other={Plural()[1]}
                      />
                      
                    </td>
                    <td key={movie.releaseDate}>
                      <FormattedDate
                        value={new Date(movie.releaseDate)}
                        year="numeric"
                        month="numeric"
                        day="numeric"
                      />
                    </td>
                    <td key={movie.views}><FormattedNumber value={movie.views}/></td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
        <div className="col-4" id="detail">
          <Detail></Detail>
        </div>
      </div>
    </div>
  );
}

function Title(){
  if (navigator.language.startsWith("es") ) {
    return "Películas";
  }
  else{
    return "Movies"
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
        <th>Nombre</th>
        <th>Dirijido por</th>
        <th>País</th>
        <th>Presupuesto</th>
        <th>Lanzamiento</th>
        <th>Visualizaciones</th>
      </tr>
    );
  } else {
    return (
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Directed by</th>
        <th>Country</th>
        <th>Budget</th>
        <th>Release</th>
        <th>Views</th>
      </tr>
    );
  }
}

export default Tabla;
