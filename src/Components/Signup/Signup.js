import React from 'react'
import { Form } from 'react-bootstrap'
import './Signup.css'
import GoogleIcon from '@mui/icons-material/Google';
import Google from '@mui/icons-material/Google';

const Signup = () => {

    const handleReload = (event) => {
        event.preventDefault()
    }

    return (
        <div className='container d-flex flex-column justify-content-center align-items-center container-div'>
            <h1 className='my-5'>Sign Up here</h1>
            <Form className='mt-2'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className='text-center rounded-pill' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className='text-center rounded-pill' type="password" placeholder="Password" />
                </Form.Group>
                <div className="text-center">
                    <button style={
                    {
                        backgroundColor: 'orangeRed',
                        outline: 'none',
                        border: 'none',
                        color: 'white',
                        padding: '10px 20px',
                        borderRadius: '5px',
                        alignItems: 'center'
                    }
                } type='submit' onClick={handleReload}>Sign Up</button>
                </div>
            </Form>
            <div className='d-flex align-itemc-center'>
                <hr />
                <small className='fs-5'>or</small>
                <hr />
            </div>
            <div className='d-flex flex-column align-items-center'>
                <button className='btn btn-primary px-3 py-2'>
                    <Google className='me-2'></Google>
                    Continue With Google</button>
            </div>
        </div>
    )
}

export default Signup