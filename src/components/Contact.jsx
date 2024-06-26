import React from 'react'
import Form from './Form'


function Contact() {
  return (
    <>
    <div className='bg-cover'>
      <div className="text-light text-center">
      <h1 className='pt-5'>Contact</h1>
      <p>Home <i className="fa fa-arrow-right ms-3 me-3"></i>Contact</p>

        </div>
        </div>

        <div className="container">
        <div className="row">
          <div className="col-md-4 mt-5" data-aos="fade-up">
            <p className="fw-bold">
              {" "}
              Kindly Call / Chat us or Send us an email.
            </p>
            <div className="">
              <div className="mb-3">
                <a href="tel:09137029216" className='text-decoration-none text-dark'>
                  <span className="me-3">
                    <i className="fa fa-phone"></i>
                  </span>
                  +234 8135110228
                </a>
              </div>
              <div className="mt-3">
                <a href="https://wa.me/+2348135110228" className='text-decoration-none text-dark'>
                  <span className="me-3">
                  <i className="fab fa-whatsapp"></i>
                  </span>
                  +234 8135110228
                </a>
              </div>
              <div className="mt-3">
                <a href="mailto:info@kyrianAgroVentures.com" className='text-decoration-none text-dark'>
                  <span className="me-3">
                    <i className="fa fa-envelope"></i>
                  </span>
                  info@kyrianAgroVentures.com
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-8 mt-5" data-aos="fade-up">
          <Form/>
          </div>
        </div>
      </div>

    </>
  )
}

export default Contact