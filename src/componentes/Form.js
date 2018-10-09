import React from 'react';
import { InputGroup, Input, Button } from 'reactstrap';
import '../App.css';

const Form = (props) => {
    return (
        <form onSubmit={props.getMovie}>


            <InputGroup>
                <Input text="text" name="movie" placeholder="Busca tus peliculas" />
            </InputGroup>
            <Button  className="btnSearch">Busca tu movie</Button>
        </form>

    );
}


export default Form;
