import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect } from 'react';

import Card from '../components/Card';
import WorkoutForm from '../components/WorkoutForm';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';

function Home() {
  const { workouts, dispatch } = useWorkoutsContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('http://localhost:4000/api/workout/')
      
      const json = await response.json()
      
      if (response.ok) {
       dispatch({
        type: 'SET_WORKOUTS',
        payload: json
       })
      }
    }
    fetchWorkouts()
    
  }, [])
  
  return (
      <Container fluid="xl">
         <Row>
          <Col lg={10} md={8}>
            <Row className="justify-content-md-center">
              {workouts.map((workout) =>
                <Col md="auto" key={workout._id }>
                  <Card workout={workout} />
                </Col>
              )}
            </Row>
          </Col>
          <Col lg={2} md={4}>
            <WorkoutForm/>
          </Col>
        </Row>
      </Container>
  )
}

export default Home