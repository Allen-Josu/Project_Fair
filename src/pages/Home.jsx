import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import titleimage from '../assets/settings.jpeg'
import ProjectCard from '../components/ProjectCard'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <>
      <div style={{ width: '100%', height: '100vh' }}>
        <div className='container-fluid rounded'>
          <Row className='align-items-center p-5'>
            <Col sm={12} md={6}>
              <h1><FontAwesomeIcon icon={faStackOverflow} className='me-2 fs-2' />Project Fair</h1>
              <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia perferendis.</p>
              <button className='btn btn-danger mt-3'>Get start <FontAwesomeIcon icon={faArrowRight} className='ms-1' /></button>
            </Col>
            <Col sm={12} md={6}>
              <img src={titleimage} alt="image" width={'300px'} height={'400px'} />
            </Col>
          </Row>
        </div>

      </div>
      <div className='mt-5'>
        <h1 className='text-center'>Explore our Project</h1>
        <marquee scrollAmount={10}>
          <div className='d-flex mt-5'>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </marquee>
        <div className='text-center mb-5'>
        <Link to={'/project'} style={{fontWeight:'bold',fontSize:'17x',textDecoration:'none'}}>See More Project</Link>
        </div>
      </div>


    </>
  )
}

export default Home