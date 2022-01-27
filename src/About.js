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
import Card from 'react-bootstrap/Card';
import yt from './youtube.png';
import fb from './facebook_monochromatic.png';
import tw from './twitter_monochromatic.png';

class About extends React.Component {
    render() {
        return (
        <>
        <div>
            <Card inverse style={{ backgroundColor: '#F5F5F5' }}>
                <Card.Body>
                    <Card.Title>About</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">All about me - the developer</Card.Subtitle>
                </Card.Body>
            </Card>
            <br/><br/>
            
            <br/><hr/><br/>            
            
            <a href="https://www.youtube.com/" target="_blank">
                <img src={yt} className="fimg" alt="YouTube" style={{ width: "5%", margin: "10px 15px" }}/></a>
            <a href="https://www.facebook.com/" target="_blank">
                <img src={fb} className="fimg" alt="Facebook" style={{ width: "7%", margin: "10px 15px" }}/></a>
            <a href="https://twitter.com/home" target="_blank">
                <img src={tw} className="fimg" alt="Twitter" style={{ width: "6.5%", margin: "10px 15px" }}/></a>
            <a style={{ width: "7%", margin: "10px 250px" }}>&copy; 2021 Liubov Trokoz</a>
        </div>
        </>
        );
    }
}

export default About;