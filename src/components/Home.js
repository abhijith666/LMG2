import React from 'react'
import { useState } from 'react';
import { Navbar, Nav,Container,Button,Spinner } from 'react-bootstrap'; 

function Home() {
    const [user, setuser] = useState([]);
    const [loading, setloading] = useState(false)
    const getUser = async () => {
       setloading(true)
        const response = await fetch("https://reqres.in/api/users?page=1");
        let data = await response.json();
        console.log(data)
        setuser(data.data);
        setloading(false)
    
      };
      const next = async () => {
        setloading(true)
    
        const response = await fetch("https://reqres.in/api/users?page=2");
        let data = await response.json();
        setuser(data.data);
        setloading(false)
    
      }
    return (
        <div>
        <div>
            <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">LGM-TASK 2</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        
        <Button className="mt-2" variant="primary" onClick={getUser}>GET USER</Button>
       
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
        <div className="loadingDiv">
        {loading ? <Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner> : " "}
      </div>
      
          <div className="userGrid">
          {user.map((users)=>{
          return( 
          <div className="userContainer">
              <div className="image">
                  <img src={users.avatar} alt="" />
              </div>
              <div className="userDetails">
                  <h5>{users.id}:{users.first_name} {users.last_name}</h5>
                  <p>{users.email}</p>
              </div>
  
          </div>
          
          
          )
      })}
      </div>
    
      <nav className="page" aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <a className="page-link" href="#" onClick={getUser}>
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" onClick={next}>
              2
            </a>
          </li>
        </ul>
      </nav>
       
        
        </div>
    )
}

export default Home




