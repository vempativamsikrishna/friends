import React, { useContext, useState } from 'react'
import { store } from '../../App'
import { Carousel, Container, Row ,Col} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import {GiWireframeGlobe} from 'react-icons/gi'
import NavDropdown from 'react-bootstrap/NavDropdown';

function Hompage() {
    const[menus,setMenus]=useContext(store);
    const[option,setOption]=useState()


    
   console.log(option) 
  return (
   <>
   
                 
      

      <Carousel>
      {
        menus && menus.map((item)=>{
            return(
                item.images && item.images.map((item)=>{
                    return(
      <Carousel.Item>
                                    <img src={item.image} width={'100%'} />

        
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
         )
        })
    )
})
}
      
    </Carousel>



  {/* <Container>
    <Row>
      <Col lg={2} className="mb-4 mt-4">
      <Nav>
            <Nav.Link id="basic-nav-globe"> <GiWireframeGlobe/></Nav.Link>


             
            
           <NavDropdown  title="Select car" id="basic-nav-dropdown">

            {menus && menus.map((item)=>{
              return(
              item.options &&  item.options.map((item)=>{
                  return(
                    <NavDropdown.Item href="#action/3.1" onClick={()=>{setOption(item)}}  >{item.cars}</NavDropdown.Item>

                  )
                })
              )
            })}
           
              
             
            </NavDropdown>
            <NavDropdown title="Select modal" id="basic-nav-dropdown">
{option && option.modals.map((item)=>{
  return(
    <NavDropdown.Item href="#action/3.1"   >{item.year}</NavDropdown.Item>

  )
})}
           
            </NavDropdown>
           

          </Nav>
      </Col>
    </Row>
  </Container> */}

   </>
  )
}

export default Hompage
