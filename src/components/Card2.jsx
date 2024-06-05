import React from 'react'
import pics1 from "../assets/Frame1.jpeg"  
import pics2 from "../assets/Frame2.jpg"  
import pics3 from "../assets/Frame3.jpg"  
import pics4 from "../assets/Frame4.jpg"  
import pics5 from "../assets/Frame5.jpeg"  
import pics6 from "../assets/Frame6.jpg" 
import pics7 from "../assets/Frame7.jpg"  
import pics8 from "../assets/Frame8.jpg"  
import pics9 from "../assets/Frame9.png"  
import pics10 from "../assets/Frame10.jpg"  
import pics11 from "../assets/Frame11.jpg"  
import pics12 from "../assets/Frame12.jpg" 

function Card() {
    const cardData=[
        {image:pics1,title:'Chicken', content:'We have layers, broilers and dual purpose breeds...'},
        {image:pics2,title:'Turkey', content:'Raised primarily for meat...'},
        {image:pics3,title:'Grains & Cereals', content:'This includes wheat, rice, corn(maize) and barley......'},
        {image:pics4,title:'Legumes', content:'This includes soybeans and peanuts...'},
        {image:pics5,title:'Fruits', content:'This includes apples, citrus fruits(oranges,lemons) and grapes(for wine)...'},
        {image:pics6,title:'Vegetables', content:'This includes potatoes, tomatoes and onions...'},
        {image:pics7,title:'Fiber Crops', content:'It includes cotton, jute and flax...'},
        {image:pics8,title:'Oilseeds', content:'This includes palm oil, sunflower and canola (rapeseed)...'},
        {image:pics9,title:'Beverage Crops', content:'It includes cocoa, coffee and tea...'},
        {image:pics10,title:'Spices & Condiments', content:'It includes pepper, ginger and vanilla'},
        {image:pics11,title:'Tobacco', content:'Tobacco plants used for cigarettes and other products...'},
        {image:pics12,title:'Flowers & Ornamental plants', content:'Cut flowers (roses, lilies) and ornamental plants...'},
    ]
  return (
    <>
      <div className="row">
        {cardData.map((Card,index) =>(
            <div className="col-md-4 mb-5" data-aos="fade-up">
          <div className="card" >
             <img src={Card.image} className="card-img-top img-fluid" alt="..."/>
             <div className="card-body">
            <h4 className="card-title">{Card.title}</h4>
            <p className="card-text">{Card.content} <a href="/contact"className='text-danger text-decoration-none'>Book Now</a> </p>
            
          </div>
        </div>

        </div>
        ))}
        

        

      </div>  
    </>
  )
}

export default Card