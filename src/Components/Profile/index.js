import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';

class Profile extends Component {
    render (){
        const {pokemons} = this.props;
        return <Container>
            {pokemons.map(p => (
                <Row>
                    <Col md="4">
                        <ul>
                            <li><h2>Name: {p.name}</h2></li>
                        </ul>
                    </Col>

                    <Col md="8"></Col>
                    <img alt={""} src={p.sprites.front_default}/>
                    <img alt={""} src={p.sprites.back_default}/>
                    <img alt={""} src={p.sprites.front_shiny}/>
                    <img alt={""} src={p.sprites.back_shiny}/>
                    <br/>
                    <img alt={""} src={p.sprites.front_female}/>
                    <img alt={""} src={p.sprites.back_female}/>
                    <img alt={""} src={p.sprites.front_shiny_female}/>
                    <img alt={""} src={p.sprites.back_shiny_female}/>

                </Row>
            ))}

        </Container>
    }
};

export default Profile