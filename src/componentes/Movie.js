import React, { Component } from 'react';
import { Card, Button } from 'reactstrap';



class Movie extends Component {
  render() {
    return (

      <div>

        {this.props.title && this.props.img && <Card className="scale-in-center">
          <p>Pelicula: {this.props.title}</p>
          {this.props.year && <p>Año de Publicación: {this.props.year} </p>}
          {this.props.error && alert(this.props.error)}
          <p>Poster : <img className="imgPoster rounded-circle"
          src={this.props.img} height="70" width="70" alt="MovieApp" ></img></p>



        </Card>}




      </div>

    );
  }
}


export default Movie;

