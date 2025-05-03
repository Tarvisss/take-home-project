import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../Authorization/UserContext';
//reactStrap imports
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Container, Row } from "react-bootstrap";
import ForFunApi from '../RouteHandler/RouteHandlers';


function UserLogin(){
    const navigate = useNavigate();

    //initial form state
    const [formState, setFormstate] = useState({
        password: "",
        email: "",
    })

    //hanlder to update the form fields
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormstate(state => ({
            ...state, 
            [name]: value
        }));
    }   
    const {setCurrentUser} = useContext(UserContext);
    
    //handle signup submission.
    const handleLogin = async (e) => {
        e.preventDefault(); // prevent default form submission behavior
        const { password, email } = formState;
      
        try {
          const signinResponse = await ForFunApi.LogIn(password, email);
      
          if (signinResponse && signinResponse.id) {
            setCurrentUser({
                id: signinResponse.id,
                firstName: signinResponse.firstName,
                lastName: signinResponse.lastName,
                email: signinResponse.email,
            });
            console.log("Logged in user:", signinResponse);
            navigate('/'); // success, go to homepage
          } else {
            alert("Something went wrong");
          }
        } catch (err) {
          console.error("Signin failed:", err);
          alert("Signin failed.");
        }
      };
      
    return (
        <Container className="d-flex justify-content-center align-items-center min-vh-100">
          <div className="p-4 border rounded shadow" style={{ width: "100%", maxWidth: "550px" }}>
            <h2 className="text-center mb-4">Sign In</h2>
            <Form onSubmit={handleLogin}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formState.email}
                    placeholder="Enter email"
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formState.password}
                    placeholder="Password"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Row>

              <div className="d-flex justify-content-center pt-3">
                <Button variant="primary" type="submit">
                  Sign In
                </Button>
              </div>
            </Form>
          </div>
        </Container>  
    )
}

export default UserLogin;