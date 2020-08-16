import React, { Component } from 'react'
import Title from "./Title"
import {FaCocktail,FaShuttleVan,FaSwimmer,FaBirthdayCake} from "react-icons/fa"

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:'Free SoftDrinks',
                info:'We offer wide range of soft drinks which are prepared by our own'
            },
           
            {
                icon:<FaShuttleVan/>,
                title:'Pick & Drop',
                info:'We provide pickup and dropping services to airport & railway station'
            },
            {
                icon:<FaSwimmer/>,
                title:'Swimming Pool',
                info:'We have swimming pool for all age groups with very hygenic maintainence'
            },
            {
                icon:<FaBirthdayCake/>,
                title:'Party Hosting',
                info:'We have a space to host your birthday parties upto 200 guests'
            }

        ]
    }
    render() {
        return (
            <section className='services'>
                <Title title='SERVICES'/>
                <div className='services'>
                    {this.state.services.map((item,index)=>{
                        return( <article className='service' key={index}>
                                    <span>{item.icon}</span>
                                    <h6>
                                        {item.title}
                                    </h6>
                                    <p>
                                        {item.info}
                                    </p>

                                </article>)
                    })}
                </div>
            </section>
        )
    }
}
