import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { store } from '../../App';
import {GiWireframeGlobe} from 'react-icons/gi'

function BasicExample() {
    const[menus,setMenus]=useContext(store)
  return (
    <Navbar expand="lg"  fixed='top'>
      <Container>
        <Navbar.Brand href="#home">Techno-Elevator</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            {menus && menus.map((item)=>{
                return(
            <Nav.Link href="#home">{item.label}</Nav.Link>
            )
            })}
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link id="basic-nav-globe"> <GiWireframeGlobe/></Nav.Link>
           <NavDropdown  title="ENGLISH" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">ARABIC</NavDropdown.Item>
              
             
            </NavDropdown>
           

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;