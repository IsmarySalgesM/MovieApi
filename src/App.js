import React, { Component } from 'react';
import Titulo from './componentes/Titulo';
import Form from './componentes/Form';
import Movie from './componentes/Movie';
import '../src/App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      year: undefined,
      title: undefined,
      img: undefined,
      error: undefined,
    }
  }

  getMovie = async (e) => {
    e.preventDefault();
    const trailer = e.target.elements.movie.value;
    const apiMovie = await fetch(`http://www.omdbapi.com/?s=${trailer}&apikey=540c9b7f `)
    const dataMovie = await apiMovie.json();



    if (trailer) {
      const movieMap = dataMovie.Search
      movieMap.map((elements) => {
        console.log(elements)
        this.setState({
          year: elements.Year,
          title: elements.Title,
          img: elements.Poster,
          error: elements.Error
        })


      })



    } else {
      this.setState({
        year: undefined,
        title: undefined,
        img: undefined,


      })
    }
  }


  render() {
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
                    year={this.state.year}
                    title={this.state.title}
                    img={this.state.img}
                    error={this.state.error}
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
