import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import './app.scss';
import Game from './game';

export default function App() {
    return (
        <BrowserRouter>
            <Navbar bg="light" expand="lg" className="mb-4">
                <Container>
                    <Navbar.Brand href="/">React Demo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="game">Game</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container>
                <Switch>
                    <Route path="/game">
                        <Game />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Container>
        </BrowserRouter>
    );
}

function Home() {
    return <h2>Home</h2>;
}