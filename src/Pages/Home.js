import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'
 
const Home = () => {
    return (
            <>
                <Hero>
                    <Banner title="luxiours rooms" subtitle="delux rooms starting from $299"> <Link to="/rooms" className="btn-primary"> Our rooms </Link></Banner>
                </Hero>
                <Services></Services>
                <FeaturedRooms/>
            </>
    )
}

export default Home;

