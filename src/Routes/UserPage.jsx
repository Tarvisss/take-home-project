import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";  // Added for navigation
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import UserContext from "../Authorization/UserContext";

function UserPage(){
  
  const { currentUser } = useContext(UserContext); // Access currentUser from context
  console.log(currentUser)
  const navigate = useNavigate();

  // If currentUser is not available (e.g., the user isn't logged in), redirect to login
  if (!currentUser) {
    return (
      <div>
        <p>You are not logged in. Please log in to view your profile.</p>
        <button onClick={() => navigate('/login')}>Go to Login</button>
      </div>
    );
  }

  return (
    <div>
      <h2>User: {currentUser.firstName} {currentUser.lastName}</h2>
      <Container>
        <Col xs={6} md={4}>
          <Image src="holder.js/171x180" roundedCircle />
        </Col>
      </Container>
    </div>
  );
}

export default UserPage;
