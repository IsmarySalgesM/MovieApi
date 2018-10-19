import React, { Component } from 'react';
import Titulo from './componentes/Titulo';
import Form from './componentes/Form';
import Movie from './componentes/Movie';
import '../src/App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
    movies : [],
    error: false,
  
    }
  }

  getMovie = async (e) => {
    e.preventDefault();
    let trailer = e.target.movie.value;
    const apiMovie = await fetch(`https://www.omdbapi.com/?s=${trailer}&apikey=540c9b7f `)
    const dataMovie = await apiMovie.json();
  

    if (dataMovie.Response === "True") {
      let movieMap = dataMovie.Search
      console.log(dataMovie.Response)
     this.setState({
       movies: movieMap,
       error: false
      })   
    }else  {
      console.log('true')
      this.setState({
        movies:dataMovie,
        error: true
      })
    }
  }


  render() {
    console.log(this.state.error)
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row ">
                <div className="col-12 col-md-12 col-lg-12 title-container center">
                  <Titulo />
                
                </div>
                <div className="col-12 col-md-12 col-lg-12 form-container">
                  <Form getMovie={this.getMovie} />
                  <Movie
                    movies={this.state.movies}
                    errors={this.state.error} 
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
