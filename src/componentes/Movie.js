import React, { Component } from 'react';
import { Card } from 'reactstrap';



class Movie extends Component {
  constructor(props){
    super(props);

  
  }
  render() {
    // console.log(this.props.movies)
    return (
      <div className='App-main'>
        {
          this.props.movies.map(elementMovie => {
            console.log(elementMovie)
            return (
              <div className='App-box'>
                <p> {elementMovie.Title} </p>           
              </div>
            )
          })
        }
      </div>


    )
  }
}
 export default Movie;

