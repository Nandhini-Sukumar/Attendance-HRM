import React from "react";
import { Container,  Navbar } from "react-bootstrap";
import * as Icon from 'react-bootstrap-icons';

export default function header(){

    return(
        <>
        
        <div className="navContainer"> 
                <Navbar className="navAlign">
                    <Container>
                        <div className="firstNav">
                            <Navbar.Brand href="#home" >
                                
                                <img src="https://cdn6.agoda.net/images/kite-js/logo/agoda/color-default.svg" width="60" height="60" alt=""/>
                                
                            </Navbar.Brand>
                            {/* <Nav className="me-auto">
                            
                            </Nav> */}
                        </div>

                        <div className="secondNav">
                            <div>
                              <Icon.Bell className="bellIcon"/>
                               
                            </div>



                        </div>
                    </Container>
                </Navbar>
        </div>

    
        
        
        </>
    )
}