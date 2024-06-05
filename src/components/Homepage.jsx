import React from 'react'
import About from "../assets/About.jpg" 
import Card from './Card'
import Form from './Form'
import icon1 from '../assets/Icon1.png'
import icon2 from '../assets/Icon2.png'
import icon3 from '../assets/Icon3.png'
import icon4 from '../assets/Icon4.png'
import carouselchicks from '../assets/Crops2.png'
import carouselcrop from '../assets/Egg.png'
import carouselegg from '../assets/Chicks.png'

function Homepage() {
  return (
    <>

<div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={carouselchicks} className="d-block w-100" style={{maxHeight:'600px', objectFit:'cover',width:'100%'}} alt="..."/>
      
    </div>
    <div className="carousel-item">
      <img src={carouselcrop} className="d-block w-100" style={{maxHeight:'600px', objectFit:'cover',width:'100%'}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={carouselegg} className="d-block w-100" style={{maxHeight:'600px', objectFit:'cover',width:'100%'}} alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
   

     <div className="container pt-5">
      <div className="text-center" data-aos="fade-up">
        <h2>Welcome To Kyrian Agro Ventures</h2>
        <div className="bg-success2 mx-auto "></div>
        <p className='pt-3 text-success'>Your Trusted Partner in Poultry and Cash Farming</p>
      </div>
      
      <div className="row">
        <div className="col-md-6" data-aos="fade-up">
        <img src={About} className='img-fluid rounded' alt=""/>
        </div>

        <div className="col-md-6" data-aos="fade-up">
          <h2>We Provide Agricultural Products</h2>
          <p>At Kyrian Agro Ventures, we are dedicated to providing high-quality agricultural products through our diverse farming practices. Our farm specializes in both poultry and cash crop farming, ensuring that we meet the needs of the community with fresh, nutritious, and sustainably produced goods.</p>
          
         
          </div>
      </div>
      
     </div>
     <div className="container pt-5">
      <div className="text-center" data-aos="fade-up">
      
      <h2>SERVICES</h2>
      <div className="bg-success2 mx-auto mb-5"></div>


      </div>

      <Card/>

      <div className="text-center" data-aos="fade-up">
        <a href="/services" className="btn btn-success">Load more</a>
      </div>
      
     </div>

    
     <div className="bg-success mt-5" style={{minHeight:'200px', padding: '20px 0'}}>
      <div className="container pt-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-8">
        <h2>Applying 100% Pure Organic Fertilizers</h2>
          <p>Real quality farm-grown products</p>
        </div>
        <div className="col-md-4 text-md-end text-sm-start">
          <a href="/contact" className="btn btn-light">Buy Now</a>
        </div>
      </div>
      </div>
      

     </div>

     <div className="container mt-5">
      <div className="row">
      <div className='col-md-6' data-aos="fade-up">
          <h2>WHY CHOOSE US?</h2>
          <div className="d-flex mt-3">
              <div className="flex-grow-1 me-2" >
              <img src={icon1} style={{width:'100px', height:'auto'}} alt="" />
          </div>
              
              <div className="flex-grow-1 ms-2">
                <h4>Commitment to Quality </h4>  
                <p>We ensure that every product we deliver meets the highest standards of excellence.</p>           
              </div>
          </div>

          <div className="d-flex mt-3">
              <div className="flex-grow-1 me-2">
              <img src={icon2} style={{width:'100px', height:'auto'}} alt="" />
          </div>
              
              <div className="flex-grow-1 ms-2">
                <h4>High-Quality Poultry and Crops  </h4>  
                <p>Our poultry is raised in humane, clean, and spacious conditions, ensuring they are healthy and stress-free; and similarly as our cash crops. </p>           
              </div>
          </div>

          <div className="d-flex mt-3">
              <div className="flex-grow-1 me-2">
              <img src={icon3} style={{width:'100px', height:'auto'}} alt="" />
          </div>
              
              <div className="flex-grow-1 ms-2">
                <h4>Ethical Farming Practices </h4>  
                <p>Our ethical approach to farming includes humane treatment of animals and responsible land use. </p>           
              </div>
          </div>

          <div className="d-flex mt-3">
              <div className="flex-grow-1 me-2">
              <img src={icon4} style={{width:'100px', height:'auto'}} alt="" />
          </div>
              
              <div className="flex-grow-1 ms-2">
                <h4>Innovation and Technology  </h4>  
                <p>We leverage cutting-edge technology to enhance our farming efficiency and sustainability. </p>           
              </div>
          </div>

      </div>

      <div className='col-md-6' data-aos="fade-up">
        <h2>REQUEST A PRODUCT</h2>
        <Form/>
      </div>
      </div>
      
     </div>
     

     </>
  )
}

export default Homepage