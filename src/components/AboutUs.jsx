import React, { useState } from 'react';
import Servicespix from "../assets/About.jpg"

function AboutUs() {
  return (
    <>
    <div className='bg-cover'>
        <div className="text-light text-center">
          <h1 className='pt-5'>About Us</h1>
          <p>Home <i className="fa fa-arrow-right ms-3 me-3"></i>About Us</p>

        </div>
      </div>

      <div className="container pt-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img src={Servicespix} alt="Services" className="img-fluid" style={{ width: '100%', height: 'auto' }} />
        </div>
        <div className="col-md-6">
          <h4>Welcome to Kyrian Agro Ventures, where our passion for sustainable agriculture meets innovation and excellence. While officially registered in 2024, we have been in business for five years, dedicated to transforming the agricultural landscape. Our top-quality products and services empower farmers, enrich communities, and promote environmental stewardship.</h4>
          <div className="bg-red"></div>
        </div>
      </div>
    </div>

      <div className="container pt-5" style={{textAlign:'center'}}>
        <div className="row">
          <div className="col-md-6 bg-dark2 text-light py-5" style={{gap:'5px'}}>
          <h2>OUR MISSION</h2>
            <div className="bg-red"></div>
            <p className='mt-3'>At Kyrian Agro Farm, our mission is to revolutionize agriculture by integrating cutting-edge technology, sustainable practices, and industry expertise to boost productivity, ensure food security, and foster ecological balance. We strive to create a thriving ecosystem where agriculture flourishes in harmony with nature.</p>          </div>

          <div className="col-md-6 bg-dark3 text-dark py-5 ">
            <h2>OUR VISION</h2>
            <div className="bg-red"></div>
            <p className='mt-3'>We envision a world where agriculture is sustainable, efficient, and profitable for farmers. By leveraging innovation and sustainability, we aim to be a leader in the agro industry, paving the way for future generations to enjoy a healthy and abundant planet.</p>
          </div>
        </div>
      </div>
      <div className="container what-we-do py-5">
        <h2>WHAT WE DO</h2>
        <ul className="fs-5">
          <li>High-Quality Seeds and Fertilizers: We provide a diverse range of superior seeds and eco-friendly fertilizers designed to maximize crop yields and improve soil health.</li>
          <li>Innovative Farming Solutions: Our advanced agricultural technologies, including precision farming tools, irrigation systems, and drone monitoring, help farmers optimize their operations and achieve higher efficiency.</li>
          <li>Training and Support: We offer comprehensive training programs and expert support to educate farmers on best practices, sustainable techniques, and the latest industry trends</li>
          <li>Sustainable Practices: Committed to environmental sustainability, we promote practices that conserve resources, enhance biodiversity, and reduce the carbon footprint of farming activities.</li>
        </ul>
        <h2 className='pt-5'>OUR VALUES</h2>
        <ul className="fs-5">
          <li>Integrity: We conduct our business with the highest ethical standards, ensuring transparency and fairness in all our dealings.</li>
          <li>Innovation: Embracing the latest technological advancements, we continuously seek innovative solutions to meet the evolving needs of the agricultural sector.</li>
          <li>Community: We believe in the power of community and work closely with farmers, partners, and stakeholders to create a supportive and collaborative agricultural ecosystem.</li>
          <li>Sustainability: We prioritize sustainability in every aspect of our operations, striving to protect and preserve the environment for future generations.</li>
        </ul>
      </div>


    </>
  )
}

export default AboutUs