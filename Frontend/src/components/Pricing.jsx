import { Check } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Pricing = () => {
    const pricing=[
        {
            imageURL:"/pricing.jpg",
            title:"QUARTERLY",
            prices:18000,
            length:3
        },
        {
            imageURL:"/pricing.jpg",
            title:"HALF_YEARLY",
            prices:34000,
            length:6   
        },
        {
            imageURL:"/pricing.jpg",
            title:"YEARLY",
            prices:67000,
            length:12
        }
    ]
  return (
    <section className='pricing'>
        <h1>ELITE EDGE FITNESS PLAN</h1>
        <div className="wrapper">
            {
                pricing.map(element=>{
                    return (
                        <div className="card" key={element.title}>
                            <img src={element.imageURL} alt={element.title}/>
                            <div className="title">
                                <h1>{element.title}</h1>
                                <h1>PACKAGE</h1>
                                <h3>Rs.{element.prices}</h3>
                                <p>For {element.length} Months</p>
                            </div>
                            <div className="description">
                                <p>
                                    <Check/>Equipment
                                </p>
                                <p>
                                    <Check/>All Day Free Training
                                </p>
                                <p>
                                    <Check/>Free Restroom
                                </p>
                                <p>
                                    <Check/>24/7 Skilled Support
                                </p>
                                <p>
                                    <Check/>20 Days Freezing Option
                                </p>
                                <Link to={"/"}>Join Now</Link>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Pricing