import React, { Component } from 'react';


class Form extends Component {
    render() {
        return (
            <form onSubmit ={this.props.getMovie}>
                <input text="text" name="movie" placeholder="Escoge tu pelicula favorita" />
                <button>Información</button>
            </form>

        );
    }
}

export default Form;
