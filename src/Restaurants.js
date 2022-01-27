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
import { Table, Pagination } from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const queryString = require('query-string');

function Restaurants(props) {

    const [restaurants, setRestaurants] = useState([]);
    const [page, setPage] = useState(1); 

    let borough = "";
    let query = queryString.parse(props.query);

    if(query.borough) {
        borough = query.borough;
    }   
    
    useEffect(() => {
        fetch(`https://fierce-caverns-48685.herokuapp.com/api/restaurants?page=${page}&perPage=10&borough=${borough}`)
        .then((res) => res.json())
        .then((restaurants) => {
          setRestaurants(restaurants);
        });
    }, [props.query,page]);

    function previousPage() {
        if (page > 1) {
            setPage(page - 1);
        }
    }

    function nextPage() {
        setPage(page + 1);
    }
   
    if (restaurants.length > 0) {
        return (
            <div>
                <Card inverse style={{ backgroundColor: '#F5F5F5' }}>
                    <Card.Body>
                        <Card.Title>Restaurant List</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Full list of restaurants. Optionally sorted by borough</Card.Subtitle>
                    </Card.Body>
                </Card>
                <br />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Borough</th>
                            <th>Cuisine</th>
                        </tr>
                    </thead>
                    <tbody>
                        {restaurants.map((restaurant) => (
                            <tr key={restaurant._id} onClick={() => { props.history.push(`/Restaurant/${restaurant._id}`) }}>
                                <td>{restaurant.name}</td>
                                <td>{restaurant.address.building} {restaurant.address.street}</td>
                                <td>{restaurant.borough}</td>
                                <td>{restaurant.cuisine}</td>
                            </tr> ))}
                    </tbody>
                </Table>
                <Pagination>
                    <Pagination.Prev onClick={previousPage} />
                    <Pagination.Item>{page}</Pagination.Item>
                    <Pagination.Next onClick={nextPage} />
                </Pagination>
            </div>
        );
    } 
    else if (!`${borough}`) {
        return <div>
            <Card inverse style={{ backgroundColor: '#F5F5F5' }}>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">Loading Restaurants...</Card.Subtitle>
                </Card.Body>
            </Card>
        </div>
    }
    else {
        return <div>
            <Card inverse style={{ backgroundColor: '#F5F5F5' }}>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">No Restaurants Found</Card.Subtitle>
                </Card.Body>
            </Card>
        </div> 
    }
        
}                                        
export default withRouter(Restaurants);