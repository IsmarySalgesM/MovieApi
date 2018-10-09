import React, { Component } from 'react';
import {Card, CardBody} from 'reactstrap'
import '../App.css';


class Movie extends Component {
  constructor(props) {
    super(props);


  }
  render() {
    console.log(this.props.movies)
    return (
      <div className='App-main'>
        {
          this.props.movies.map(elementMovie => {
            console.log(elementMovie)
            return (
              <div>
                <Card className="scale-in-center">
                  <CardBody>
                    <img className="rounded-circle" src={elementMovie.Poster} alt="Smiley face" height="42" width="42" />
                    <p> Tittulo :{elementMovie.Title} </p>
                    <p> Año de Publicación :{elementMovie.Year} </p>
                  </CardBody>
                </Card>
              </div>
            )
          })
        }
      </div>


    )
  }
}
export default Movie;

