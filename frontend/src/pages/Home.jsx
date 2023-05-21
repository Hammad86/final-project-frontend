import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect } from 'react';
import { useState } from 'react'
import Cards from '../components/Card';
import WorkoutForm from '../components/WorkoutForm';

function Home() {
  const [workouts, setWorkouts] = useState([]);
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('http://localhost:4000/api/workout/')
      
      const json = await response.json()
      
      if (response.ok) {
        setWorkouts(json)
      }
    }
    fetchWorkouts()
    
  }, [])
  console.log(workouts);
  return (
    <>

      <Container fluid="xl">

        <Row>
          <Col lg={10} md={8}>
            <Row className="justify-content-md-center">
              
              {workouts.map((workout,index)=>
              <Col md="auto" key={index}>
               <Cards  name={workout.name} description={workout.description} duration={workout.duration} date={workout.date}/>
               </Col>
              )}
                
              
              
            </Row>
            
          </Col>
          <Col lg={2} md={4}>
                <WorkoutForm/>
          </Col>

        </Row>
      </Container>
    </>
  )
}

export default Home