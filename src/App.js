/*********************************************************************************
 * WEB422 – Assignment 3 
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy. 
 * No part of this assignment has been copied manually or electronically from any other source 
 * (including web sites) or distributed to other students. 
 * 
 * Name: Liubov Trokoz       Student ID: 139578199      Date: 2021-02-18 
 * 
 * 
*********************************************************************************/

import React from 'react';
import './App.css';

import { Button, Col, Container, Form, FormControl, Nav, Navbar, Row } from 'react-bootstrap';
import { Redirect, Route, Switch } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { useState } from "react";
import { useHistory } from 'react-router-dom';

import Restaurants from './Restaurants';
import Restaurant from './Restaurant';
import About from './About';
import NotFound from './NotFound';

function App() {
  
  const [searchString, setSearchString] = useState("");
  const history = useHistory();
  
  function handleSubmit(e) {
    e.preventDefault();
    history.push(`/restaurants?borough=${searchString}`);
    setSearchString("");
  }
  
  return (
    <div>
      <>
      <Navbar bg="light" expand="lg">
        <LinkContainer to="/">
          <Navbar.Brand>New York Restaurants</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/restaurants">
                <Nav.Link>Full List</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
            </Nav>
            <Form onSubmit={handleSubmit} inline>
              <FormControl type="text" placeholder="Borough" className="mr-sm-2" value={searchString} onChange={(e) => setSearchString(e.target.value)} />
              <Button type="submit" variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
      </Navbar>
      <br />
      </>
      <Container>
        <Row>
          <Col>
          <Switch>
            <Route exact path="/" render={() => (<Redirect push to={"/Restaurants"} />)} />
            <Route exact path="/About" render={() => (<About />)} />
            <Route exact path="/Restaurants" render={(props) => (<Restaurants query = {props.location.search}/>)} />
            <Route path="/Restaurant/:id" render={(props) => (<Restaurant id = {props.match.params.id}   />)} />
            <Route render={() => (<NotFound />)} />
          </Switch>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;