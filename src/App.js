import React, { Component } from 'react';
import Titulo from './componentes/Titulo';
import Form from './componentes/Form';
import Movie from './componentes/Movie';

class App extends Component {
  getMovie = async (e) =>{
    e.preventDefault();
     const trailer = e.target.elements.movie.value;
    const apiMovie = await fetch(`http://www.omdbapi.com/?t=${trailer}&apikey=540c9b7f `)
    const dataMovie = await apiMovie.json();
    console.log(dataMovie);
 
  }
  
  
  
  render() {
    return (
      <div>
        <Titulo />
        <Form getMovie={this.getMovie}/>
        <Movie/>
      </div>
    );
  }
}

export default App;
