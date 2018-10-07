import React, { Component } from 'react';
import Titulo from './componentes/Titulo';
import Form from './componentes/Form';
import Movie from './componentes/Movie';

class App extends Component {
  constructor() {
    super()
    this.state = {
      year: undefined,
      title: undefined,
      runtime: undefined,
      awards: undefined,
      actors: undefined,
    }
  }

  getMovie = async (e) => {
    e.preventDefault();
    const trailer = e.target.elements.movie.value;
    const apiMovie = await fetch(`http://www.omdbapi.com/?t=${trailer}&apikey=540c9b7f `)
    const dataMovie = await apiMovie.json();
    console.log(dataMovie);
    this.setState({
      year: dataMovie.Year,
      title: dataMovie.Title,
      runtime: dataMovie.Runtime,
      awards: dataMovie.Awards,
      actors: dataMovie.Actors,
      img: dataMovie.Poster,
    })

  }



  render() {
    return (
      <div>
        <Titulo />
        <Form getMovie={this.getMovie} />
        <Movie
          year={this.state.year}
          title={this.state.title}
          runtime={this.state.runtime}
          awards={this.state.awards}
          actors={this.state.actors}
          img={this.state.img}
        />
      </div>
    );
  }
}

export default App;
