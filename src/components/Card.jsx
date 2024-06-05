import React from 'react'
import pics1 from "../assets/Frame1.png"  
import pics2 from "../assets/Frame9.png"  

function Card() {
    const cardData=[
        {image:pics1,title:'Poultry Farming', content:'Our poultry farm is home to a variety of birds, including chickens, ducks, and turkeys. We pride ourselves on maintaining the highest standards of animal welfare, ensuring that our birds are raised in a healthy and humane environment. Our poultry products, including eggs and meat, are known for their exceptional quality and taste.'},
        {image:pics2,title:'Cash Crop Farming', content:'In addition to our poultry operations, we cultivate a wide range of cash crops. Our farm produces grains, vegetables, and fruits that are grown using sustainable farming practices. We focus on crops such as wheat, corn, tomatoes, and citrus fruits, which are carefully nurtured to deliver the best possible yield and quality.'},
    ]
  return (
    <>
      <div className="row">
        {cardData.map((Card,index) =>(
            <div className="col-md-6 mb-5" data-aos="fade-up">
          <div className="card" >
             <img src={Card.image} className="card-img-top" style={{width:'100%', height:'300px', objectFit:'cover'}} alt="..."/>
             <div className="card-body">
            <h4 className="card-title">{Card.title}</h4>
            <p className="card-text">{Card.content}  </p>
            
          </div>
        </div>

        </div>
        ))}
        

        

      </div>  
    </>
  )
}

export default Card