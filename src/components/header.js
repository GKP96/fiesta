import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import maskLogo from '../photo/fiesta mask final logo.png'
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../css/header.css';
import '../css/navAnimation.css';




function Header() {
  return (
    <>
      <Navbar bg="black" className="fixed-top" expand="lg" style={{ fontSize: '17px', height: '9vh' }}>
        <Container>
          <Navbar.Brand href="http://localhost:3000/mainPage">
            <img src={maskLogo} className="d-inline-block align-top " alt="My Logo" style={{ height: '50px', width: '70px', marginBottom: '3px' }} />
          </Navbar.Brand>
          <Navbar.Toggle className="custom-toggler" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto navbg">
              <Nav.Link href="http://localhost:3000/gallery" className='text-light nav-animation  '><b><span className="hower ">Gallery</span></b></Nav.Link>
              <Nav.Link href="http://localhost:3000/members" className='text-light nav-animation'><b><span className="hower">Members</span></b></Nav.Link>
              <div style={{ color: 'white' }}>
                <NavDropdown title={<span className="text-white my-auto fw-bold "><span class="hower">Societies</span></span>} id="basic-nav-dropdown">
                  <NavDropdown.Item className="navbg" href="http://localhost:3000/acting-drama">Acting & Drama</NavDropdown.Item>
                  <NavDropdown.Item className="navbg" href="http://localhost:3000/music-dance">Music & Dance</NavDropdown.Item>
                  <NavDropdown.Item className="navbg" href="http://localhost:3000/literature-debate">Litreture & Debate</NavDropdown.Item>
                  <NavDropdown.Item className="navbg" href="http://localhost:3000/fine-arts">Fine Arts</NavDropdown.Item>
                </NavDropdown>
              </div>
              <Nav.Link href="http://localhost:3000/details" className='text-light nav-animation'><b><span className="hower">Accommodation</span></b></Nav.Link>
              <Nav.Link href="http://localhost:3000/mainPage" className='text-light nav-animation'><b><span className="hower">Notification</span></b></Nav.Link>
            </Nav>
            <div className='d-flex'>
              <Nav.Link href="http://localhost:3000/userId-reg" className='text-light nav-animation ' variant='outline-success'><b className='btn btn-danger hower'>Register</b></Nav.Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
export default Header;








