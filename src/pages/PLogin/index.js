import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardActions, TextField, Button } from "@material-ui/core";

import Logo from "../../assets/logo512.png";

import { Form, Container } from "./styles";

class SignUp extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        error: "",
    }

    _handleSignUp = event => {
        event.preventDefault();
        alert("Registrando usuário");
    }

    render() {
        return (
            <Container>
                <Form>
                    <Card>
                        <CardContent>
                            <img src={Logo} alt="Logo" />
                            {this.state.error && <p>{this.state.error}</p>}
                            <TextField variant="outlined" label="Nome de usuário" />
                            <TextField variant="outlined" label="Endereço de e-mail" />
                            <TextField variant="outlined" label="Senha" />
                        </CardContent>
                        <CardActions>
                            <Button variant="outlined">Login</Button>
                        </CardActions>
                    </Card>
                    <hr />
                    <Link to="/">Fazer login</Link>
                </Form>
            </Container>
        )
    }
}
export default SignUp;