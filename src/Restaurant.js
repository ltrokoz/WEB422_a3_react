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

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import ListGroup from 'react-bootstrap/ListGroup';

function Restaurant(props) {

    const [restaurant, setRestaurant] = useState({});
    const [loading, setLoading] = useState(true);   

    useEffect(() => {
        setLoading(true);
        fetch(`https://fierce-caverns-48685.herokuapp.com/api/restaurants/${props.id}`)
        .then((res) => res.json())
        .then((data) => {
            setLoading(false);
            if (data.hasOwnProperty("_id")) {
                setRestaurant(data);
            } else {
                setRestaurant(`${props.id}`);
            }
        });
    }, [props.id]);
    
    if (loading) {
        return <div>
        <Card inverse style={{ backgroundColor: '#F5F5F5' }}>
            <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">Loading Restaurant Data...</Card.Subtitle>
            </Card.Body>
        </Card>
        </div>
    }
    else {
        if (restaurant._id ) {
            return (
                <>
                <div>
                    <Card inverse style={{ backgroundColor: '#F5F5F5' }}>
                        <Card.Body>
                            <Card.Title>{restaurant.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{restaurant.address.building} {restaurant.address.street}</Card.Subtitle>
                        </Card.Body>
                    </Card>
                    <br />
                    <MapContainer style={{"height": "400px"}} center={[ restaurant.address.coord[1], restaurant.address.coord[0] ]} zoom={13} scrollWheelZoom={false}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" /> 
                        <Marker position={[ restaurant.address.coord[1], restaurant.address.coord[0] ]}></Marker> 
                    </MapContainer>
                    <br/>
                    <h4>Ratings</h4>
                    <hr/>
                    <CardDeck>
                        {restaurant.grades.slice(0,4).map((grade, index) =>
                        <Card key={index} inverse style={{ backgroundColor: '#F5F5F5' }}>
                            <Card.Header>Grade: {grade.grade}</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Completed: {new Date(grade.date).toLocaleDateString()}</ListGroup.Item>
                            </ListGroup>                               
                        </Card> 
                        )}
                    </CardDeck>
                </div>
                </>
            );
        } 
        else {
            return <div>
                <Card inverse style={{ backgroundColor: '#F5F5F5' }}>
                    <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted">Unable to find Restaurant with id: {props.id}</Card.Subtitle>
                    </Card.Body>
                    </Card>
            </div> 
        }
    }             
}

export default Restaurant;