import { faFacebook, faInstagram, faLinkedin, faStackOverflow, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Footer() {
    return (
        <>
            <div className="row p-5" style={{ backgroundColor: 'black' }}>
                <div className="col-md-4">
                    <h3> <FontAwesomeIcon icon={faStackOverflow} className='me-2 fs-2' />Project Fair</h3>
                    <p className='mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim cum eveniet eaque optio, commodi numquam, reprehende.</p>
                </div>
                <div className="col-md-2 ps-5">
                    <h3 className='mb-3'>Links</h3>
                    <div>
                        <p>Home</p>
                        <p>Login</p>
                        <p>Register</p>
                    </div>
                </div>
                <div className="col-md-2">
                    <h3 className='mb-3'>Guides</h3>
                    <div>
                        <p>React</p>
                        <p>React-bootstrap</p>
                        <p>React-bootswatch</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <h3>Contact Us</h3>
                    <div className='d-flex mt-4'>
                        <input type="text" className='form-control me-2 rounded shadow' placeholder='Enter Email-Id' />
                        <button className='btn btn-warning pe-4'>Subscribe</button>
                    </div>
                    <div className='d-flex mt-3 fs-3 mx-5 text-info'>
                        <FontAwesomeIcon icon={faInstagram} className='me-4' />
                        <FontAwesomeIcon icon={faLinkedin} className='me-4' />
                        <FontAwesomeIcon icon={faFacebook} className='me-4' />
                        <FontAwesomeIcon icon={faTwitter} />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer