import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {FaDumbbell} from 'react-icons/fa';
import { IconContext } from "react-icons";
function Cards({name,description,duration,date}) {
    return (
        <Card style={{ width: '18rem' , marginBottom:'20px'}}>
            
            <Card.Body>
            <IconContext.Provider value={{ style: { fontSize: '30px' } }}>
            <div>
            <FaDumbbell/>
            </div>
          </IconContext.Provider>
            
                <Card.Title>{name}</Card.Title>
                <Card.Text as="h6">
                    {description}
                </Card.Text>
                <Card.Text>
                    {duration}
                </Card.Text>
                
                <Card.Text>
                    {date}
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