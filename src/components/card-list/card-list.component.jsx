import React from 'react';
import { CardRobot } from '../card/card.component';
import {Row, Col} from "react-bootstrap";

export const CardList = props => (
    <Row>
    	{ props.robotsprop.map(robot => (
    	    <Col className="mb-3" xs="6" sm="4" md="3" key={robot.id}> 
    	        <CardRobot robot={robot} />
    	    </Col>))} 
    </Row>
);