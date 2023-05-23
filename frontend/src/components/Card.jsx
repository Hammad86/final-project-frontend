import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import EditForm from './EditForm';
import {FaDumbbell} from 'react-icons/fa';
import { IconContext } from "react-icons";
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';

function Cards({ workout }) {
    const {dispatch} = useWorkoutsContext();
    const [isModal, setIsModel] = useState(false)
    
    const editHandle = () =>{
        setIsModel(!isModal)
        // return(
        //     <EditForm/>
        // )
    }
    
    const handleClick = async ()=>{
       const response = await fetch(`http://localhost:4000/api/workout/${workout._id}`,{
        method:'DELETE'
       })
    const json = await response.json();
    
    if(response.ok){
        dispatch({
            type:'DELETE_WORKOUT',
            payload: json
        })
    }
    }
    
    return (
        <>
        
        <Card style={{ width: '18rem' , marginBottom:'20px'}}>
            
            <Card.Body>
            <IconContext.Provider value={{ style: { fontSize: '30px' } }}>
            <div>
            <FaDumbbell/>
            </div>
          </IconContext.Provider>
            
                <Card.Title>{workout.name}</Card.Title>
                <Card.Text as="h6">
                    {workout.description}
                </Card.Text>
                <Card.Text>
                    {workout.type}
                </Card.Text>
                <Card.Text>
                    {workout.duration}
                </Card.Text>     
                <Card.Text>
                    {workout.date}
                </Card.Text>
                <div className='d-flex justify-content-between  ' style={{ width: '9rem' }}>
                <Button onClick={editHandle} className='nav-btn'>Edit</Button>
                <Button onClick={handleClick} className='nav-btn'>Delete</Button>
                </div>
                
            </Card.Body>
        </Card>
        {isModal && <EditForm workout={workout}/>}
        </>
    )
}

export default Cards