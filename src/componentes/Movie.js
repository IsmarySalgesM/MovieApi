import React, { Component } from 'react';

class Movie extends Component {
  render() {
    return (
      <div>
        {this.props.title && <p>Pelicula:{this.props.title}</p>}
        {this.props.year && <p>Año de Publicación:{this.props.year} </p>}
        {this.props.runtime && <p> Duración:{this.props.runtime} </p>}
        {this.props.awards && <p> Premiaciones:{this.props.awards} </p>}
        {this.props.actors && <p> Actores:{this.props.actors} </p>}
      </div>
    );
  }
}

export default Movie;
