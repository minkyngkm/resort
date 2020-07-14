import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'

const Rooms = () => {
    return (
        <div>
            <Hero hero='roomsHero'>
                <Banner title="Our rooms"> <Link to="/" className="btn-primary"> Retunr Home </Link></Banner>
            </Hero>
        </div>
    )
}

export default Rooms;
