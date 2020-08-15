import React from 'react'
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import {Link} from "react-router-dom"

const Home = () => {
    return (
        
            <Hero hero='defaultHero'>
                <Banner title="SANITIZED ROOMS" subtitle="STARTING AT 2000RS">
                    <Link to='/rooms' className='btn-primary'>
                        VIEW ROOMS
                    </Link>
                </Banner>
            </Hero>
        
    )
}

export default Home