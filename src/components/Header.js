import React, { Component } from 'react';
import {Row,Col, Nav,NavItem} from 'react-bootstrap/lib';
import logo from '../logo.svg';

function NavInstance(props) {
    return (
        <Nav bsStyle="pills" activeKey={1}>
            <NavItem eventKey={1} href="/home">Home</NavItem>
            <NavItem eventKey={2} title="Item" href="/greetings">Greetings</NavItem>
            <NavItem eventKey={3} title="Motivations" href="/motivations">Motivations</NavItem>
            <NavItem eventKey={4} title="Exercises" href="/exercises">Exercises</NavItem>
            <NavItem eventKey={5} title="Challenges" href="/challenges">Challenges</NavItem>
        </Nav>
    );
}
function Header(props) {
    return (
        <Row className="show-grid">
            <h1>Pampamatcho App</h1>
            <Col xs={12} md={12} style={{textAlign:'center'}}>
                <NavInstance />
            </Col>
        </Row>
    );
}

export default Header;