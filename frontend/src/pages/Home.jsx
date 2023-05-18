import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect } from 'react';
import { useState } from 'react'
import Cards from '../components/Card';

function Home() {
  const [workouts, setWorkouts] = useState(null);
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('http://localhost:4000/api/workout/')
      console.log(response.status);
      const json = await response.json()
      console.log(json);
      if (response.ok) {
        setWorkouts(json)
      }
    }
    fetchWorkouts()
    // console.log(workouts);
  }, [])
  return (
    <>

      <Container fluid="xl">

        <Row>
          <Col lg={10} >
            <Row>
              <Col>
                <Cards />
              </Col>
              <Col>
                <Cards />
              </Col>
              <Col>
                <Cards />
              </Col>
              <Col>
                <Cards />
              </Col>
            </Row>
            
          </Col>
          <Col >2 of 3 </Col>

        </Row>
      </Container>
    </>
  )
}

export default Home