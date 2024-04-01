import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>

<Navbar style={{backgroundColor:''}}>
        <Container>
          <Link to={'/'} style={{textDecoration:'none'}}>
          <Navbar.Brand href="#home" className='text-light fs-3' style={{fontWeight:'bold',textDecoration:'none'}}>
          <FontAwesomeIcon  icon={faStackOverflow}   style={{textDecoration:'none',fontWeight:'bold',fontSize:'130%',color:'white'}}/>{' '}
          
            Project fair
          </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header