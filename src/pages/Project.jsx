import React from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from '../components/ProjectCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
function Project() {
  return (
    <>
      <Header />

      <h2 className='text-center mt-5 mb-3' style={{ color: 'white', fontWeight: 'bold', fontSize: '39' }}> All Projects.</h2>

      <div className=' d-flex justify-content-center align-items-center flex-column w-100 ' style={{ backgroundColor: '' }}>


        <div className='row w-100'>

          <div className='col-md-4'></div>

          <div className='col-md-4 d-flex justify-content-center align-items-center p-4'>

            <input type="text" className='form-control  mt-4 mb-5' placeholder='Search By Technologies' />
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ marginLeft: '-35px', marginTop: '-20px', color: 'black' }} />

          </div>

          <div className='col-md-4'></div>

        </div>

        <Row className='container-fluid mb-5  '>

          <Col sm={12} md={6} lg={4} >
            <ProjectCard />



          </Col>
        </Row>

      </div>

      <div className='d-flex justify-content-center align-items-center flex-column mb-5 mt-4'>
        <img src=" https://cdn.pixabay.com/animation/2023/06/13/15/12/15-12-30-710_512.gif" alt="lock"
          style={{ width: '200px' }} />
        <h3 className='text-center mt-5' style={{ fontWeight: 'bold', color: 'whitesmoke' }}>Please <span className='text-primary'>Login</span> To See More Projects !</h3>


      </div>

    </>
  )
}

export default Project