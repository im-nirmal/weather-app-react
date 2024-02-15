import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate()

    //validation
    const handleSign = () =>{
        if(firstNameInput.value == "" || lastNameInput.value == "" || emailInput.value ==""){
            alert("please fill the form")
        }else{
            
            navigate('/dashboard')
            alert("Login successfully")
        }
    }

  return (
   <div className='d-flex justify-content-center align-items-center w-100' style={{height:'100vh'}}>
        <div className="card shadow w-50">
            <div className='row align-items-center p-5'>
                <h3 className='mb-3 fw-bolder fs-1'>Weather App</h3>
                <h5 className='mb-3 fw-bold'>Sign Up to your account</h5>
                <Form>
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" id='firstNameInput' />
                <br />
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last Name" id='lastNameInput' />
                <br />
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" id='emailInput' />
                </Form.Group>
                <Button onClick={handleSign} className='w-25' variant="success" >Sign Up</Button>{' '}
                </Form>
                
            </div>

        </div>
   </div>
  )
}

export default Login