import React, { Component } from "react";
import axios from "axios";
import {Container, Image,Row, Col} from "react-bootstrap"

const api = axios.create({
    baseURL:`https://rickandmortyapi.com/api/character`
})

class Axios extends Component{
    state= {
        courses:[]
    }

    constructor(){
        super();
        api.get('/').then(res=>{
            console.log(res.data);
            this.setState({courses: res.data.results})
        })
    }

    render(){
        return(
            <Container fluid>
                <Row>
                {this.state.courses.map(o=> 
                    <Col className="text-center col-md-4">
                        <Image src={o.image} alt="Pict"/>
                        <h2>{o.name}</h2>
                        {/* <div>{o.image}</div> */}
                    </Col>
                )}
                </Row>
            </Container>
        )
    }
}

export default Axios