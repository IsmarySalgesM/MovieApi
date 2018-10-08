import React, { Component } from 'react';
import { Button } from 'reactstrap';
class Movie extends Component {
  render() {
    return (
      <div>
        {this.props.title && <p>Pelicula: {this.props.title}</p>}
        {this.props.year && <p>Año de Publicación: {this.props.year} </p>}
        {this.props.runtime && <p> Duración: {this.props.runtime} </p>}
        {this.props.awards && <p> Premiaciones: {this.props.awards} </p>}
        {this.props.actors && <p> Actores: {this.props.actors} </p>}
        {this.props.error && alert(this.props.error)}
      <Button>ol</Button>
      </div>
    );
  }
}

export default Movie;
