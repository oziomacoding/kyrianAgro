import React, { useState } from 'react'
import Galary1 from '../assets/Galary1.png'
import Galary2 from '../assets/Galary2.png'
import Galary3 from '../assets/Galary3.png'
import Galary4 from '../assets/Galary4.png'

function Footer() {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      // Process the form submission
      console.log('Email is valid:', email);
      // For example, you could submit the form data to a server here
    } else {
      setIsValid(false);
    }

  };
  return (
    <>
      <div className="bg-success text-light mt-5 py-5">
        <div className="container">
          <div className="row">
            <div className='col-md-3'>
              <h4>KYRIAN AGRO VENTURES</h4>
              <p>Kyrian Agro Ventures is a global supplier of livestock and cash crop products. We have offices in 2 countries and an international network of partners and agents.</p>
            </div>

            <div className='col-md-3'>
              <h4>QUICK LINKS</h4>
              <ul className='list-unstyled'>
                <li><a href="/" className='text-light text-decoration-none'>Home</a></li>
                <li><a href="/services" className='text-light text-decoration-none'>All Services</a></li>
                <li><a href="/tracking" className='text-light text-decoration-none'>About Us</a></li>
                <li><a href="/contact" className='text-light text-decoration-none'>Contact</a></li>


              </ul>
            </div>


            <div className='col-md-3'>
              <h4>OUR NEWSLETTER</h4>
              <p>Sign up today for tips and latest news and exclusive special offers.</p>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="form-control mt-3 mb-3"
                />
                {!isValid && <div style={{ color: 'red' }}>Please enter a valid email</div>}

                <button className="btn btn-success ">Submit</button>
              </form>



            </div>
          </div>
        </div>
        <div className="footer-content pt-5" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
          <i class='fas fa-copyright'></i>
          <span>Kyrian Agro 2024. All rights reserved</span>

        </div>

      </div>
    </>
  )
}

export default Footer