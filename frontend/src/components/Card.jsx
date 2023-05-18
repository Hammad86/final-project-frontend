import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {FaDumbbell} from 'react-icons/fa';
import { IconContext } from "react-icons";
function Cards() {
    return (
        <Card style={{ width: '18rem' , marginBottom:'20px'}}>
            
            <Card.Body>
            <IconContext.Provider value={{ style: { fontSize: '30px' } }}>
            <div>
            <FaDumbbell/>
            </div>
          </IconContext.Provider>
            
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <div className='d-flex justify-content-between  ' style={{ width: '9rem' }}>
                <Button className='nav-btn'>Edit</Button>
                <Button className='nav-btn'>Delete</Button>
                </div>
                
            </Card.Body>
        </Card>
    )
}

export default Cards