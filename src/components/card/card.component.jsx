import React from 'react';
import { Card } from "react-bootstrap";
import './card.component.styles.css';

export const CardRobot = props => (
    <Card className="h-100 mb-3 shadow">
        <Card.Img variant="top" alt="robot" src={`https://robohash.org/${props.robot.id}?set=set3`} />
        <Card.Body>
            <Card.Title>{props.robot.name}</Card.Title>
            <Card.Text>
                {props.robot.company.catchPhrase} {props.robot.email}
            </Card.Text>
        </Card.Body>
    </Card>
)