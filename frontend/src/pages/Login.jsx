import React,{useState} from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup'
import { BiEnvelope } from 'react-icons/bi'
import {BsPhone} from 'react-icons/bs' 
import {FiLock} from 'react-icons/fi'
import { IconContext } from "react-icons"
import Button from 'react-bootstrap/Button';
import { useLogin } from '../hooks/useLogin';

function Login() {

    const {login,error,isLoading} = useLogin();

    const [ formData , setFormData ] = useState({ 
        
        email:'',
        password:'',
        
    })
    
    const handleSubmit = async(e) =>{
        e.preventDefault()
        
        await login(formData.email, formData.password);

    }

  return (
    <div className='mx-auto signup-form mt-5 pt-5'>
            <h1>Welcome </h1>
            <p className='text-secondary'>Login to continue</p>
            <Form onSubmit={handleSubmit}>
                
                <Row className="mb-3">
                    <Col>

                        <Form.Label htmlFor="email">Email</Form.Label>
                        <InputGroup>
                            <InputGroup.Text className='bg-white'>
                                <IconContext.Provider value={{ style: { fontSize: '20px' } }}>
                                    <div>
                                        <BiEnvelope />
                                    </div>
                                </IconContext.Provider>
                            </InputGroup.Text>
                            <Form.Control id="email" type='email' placeholder="your email"
                            value={formData.email}
                            onChange={(val)=>{setFormData({...formData,email: val.target.value})}}
                            />
                        </InputGroup>
                    </Col>
                </Row>
                
                <Row className="mb-3">
                    <Col>
                        <Form.Label htmlFor="password">Password</Form.Label>
                        <InputGroup>
                        <InputGroup.Text className='bg-white'>
                                <IconContext.Provider value={{ style: { fontSize: '20px' } }}>
                                    <div>
                                        <FiLock />
                                    </div>
                                </IconContext.Provider>
                            </InputGroup.Text>
                            <Form.Control type="password" id="password" placeholder="your password"
                             value={formData.password}
                             onChange={(val)=>{setFormData({...formData,password: val.target.value})}}
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <Row className='mb-3'>
                    <p className='text-secondary'>By signing in, you’re agree to our <span>Terms & Condition</span>  and <span>Privacy Policy.*</span> </p>
                </Row>
                <Row className='mb-3'>
                <Button disabled={isLoading} type='submit' className='nav-btn'>Login</Button>
                </Row>
                <Row className='mb-3'>
                    <p className='text-secondary text-center'> <span>Login</span> Already have an account </p>
                </Row>
            </Form>
            {error && <div className='error'>{error}</div>}
        </div>
  )
}

export default Login