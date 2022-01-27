import React from 'react';
import Card from 'react-bootstrap/Card';
import nf from './404-error.png';

class NotFound extends React.Component {
    render() {
        return (
            <>
            <div>
                <Card inverse style={{ backgroundColor: '#F5F5F5' }}>
                    <Card.Body>
                        <Card.Title>Not Found</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">We can't find what you're looking for...</Card.Subtitle>
                    </Card.Body>
                </Card>
                <br/>               
                <img src={nf} className="image" alt="Not Found" style={{ width: "35%", margin: "30px 0" }}/>
            </div>
            </>
        );
    }
}

export default NotFound;