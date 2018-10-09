import React, { Component } from 'react';
import Titulo from './componentes/Titulo';
import Form from './componentes/Form';
import Movie from './componentes/Movie';
import '../src/App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
    movies : []
    }
  }

  getMovie = async (e) => {
    e.preventDefault();
    const trailer = e.target.elements.movie.value;
    const apiMovie = await fetch(`http://www.omdbapi.com/?s=${trailer}&apikey=540c9b7f `)
    const dataMovie = await apiMovie.json();



    if (trailer) {
      let movieMap = dataMovie.Search
      console.log(movieMap)
     this.setState({movies: movieMap})
    } else {
      this.setState({
        movies : undefined


      })
    }
  }


  render() {
    console.log(this.state.movies)
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row ">
                <div className="col-12 col-md-4 title-container center">
                  <Titulo />
                </div>
                <div className="col-12 col-md-8 form-container">
                  <Form getMovie={this.getMovie} />
                  <Movie
                    movies={this.state.movies}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
