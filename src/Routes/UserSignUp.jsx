import { useContext,useState } from 'react';
import { useNavigate } from 'react-router-dom';
//reactStrap imports
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Container, Row, FloatingLabel} from "react-bootstrap";
import ForFunApi from '../RouteHandler/RouteHandlers';


function UserSignUp(){
    const navigate = useNavigate();

    //initial form state
    const [formState, setFormstate] = useState({
        password: "",
        email: "",
        firstName: "",
        lastName: ""
    })

    //hanlder to update the form fields
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormstate(state => ({
            ...state, 
            [name]: value
        }));
    }   

    //handle signup submission.
    const handleSignUp = async (e) => {
        e.preventDefault(); // prevent default form submission behavior
        const { password, email, firstName, lastName } = formState;
      
        try {
          const signupResponse = await ForFunApi.SignUp(password, email, firstName, lastName);
      
          if (signupResponse) {
            navigate('/'); // success, go to homepage
          } else {
            alert("Something went wrong");
          }
        } catch (err) {
          console.error("Signup failed:", err);
          alert("Signup failed.");
        }
      };
      
    return (

        <Container className="d-flex justify-content-center align-items-center mt-5 mb-5">
          <div className="p-4 border rounded shadow" style={{ width: "100%", maxWidth: "600px" }}>
            <h2 className="text-center">Sign Up</h2>
            <Form onSubmit={handleSignUp}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name="email" value={formState.email} placeholder="Enter email" onChange={handleChange} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" name="password" value={formState.password} placeholder="Password" onChange={handleChange} />
                </Form.Group>
              </Row>
              <Row className="mb-3">
              <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                <Form.Label>First Name</Form.Label>
                <Form.Control type='text' name="firstName" value={formState.firstName} placeholder="John" onChange={handleChange} />
              </Form.Group>

              <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type='text' name="lastName" value={formState.lastName} placeholder="Doe"  onChange={handleChange} />
              </Form.Group>
              </Row>
              
                <Form.Group as={Col} controlId="formGridCity">
                <FloatingLabel controlId="floatingTextarea2" label="Tell us about yourself.">
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: '100px' }}
                    />
                    </FloatingLabel>
                </Form.Group>
            <div className="d-flex justify-content-center pt-3">
              <Button className="justify-content-center align-items-center" variant="primary" type="submit">
                Submit
              </Button>
            </div>
            </Form>
          </div>
        </Container>
    )
}

export default UserSignUp;