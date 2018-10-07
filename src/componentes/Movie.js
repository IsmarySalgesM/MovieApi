import React, { Component } from 'react';

class Movie extends Component {
  render() {
    return (
      <div>
        {this.props.year}
        {this.props.title}
        {this.props.runtime}
        {this.props.awards}
        {this.props.actors}
      </div>
    );
  }
}

export default Movie;
