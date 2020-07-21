import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { RoomContext } from '../Context'
// import Hero from '../components/Hero'
import Banner from '../components/Banner'
import defaultImg from '../images/room-1.jpeg'
import StyledHero from'../components/StyledHero'

class SingleRoom extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            slug: this.props.match.params.slug,
            defaultImg
        }
    }
    
    static contextType = RoomContext

    render (){ 
        
        const { getRoom } = this.context 
        const room = getRoom(this.state.slug)

        if (!room) {
            return (
                <div className="error">
                    <h3> no such room could be found...</h3>
                    <Link to="/rooms" className="btn-primary"> Back to rooms </Link>
                </div>
            )
        }
        const { name, description, capacity, size, price, extras, pets, breakfast, images} = room
        const [mainImg, ...defaultImg] = images
        

        return (
            <div>
                <StyledHero img={mainImg}>
                    <Banner title={`${name} room`}>
                        <Link to="/rooms" className="btn-primary"> Back to rooms</Link>    
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {defaultImg.map( (item, index) => {
                            return(
                                <img key={index} src={item} alt={name}/>
                            )})}
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>Details</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>Info</h3>
                            <h6> price : {price} </h6>
                            <h6> size: {size} sqft </h6>
                            <h6> Max capacity : {capacity > 1 ? `${capacity} people` : `${capacity} person`} </h6>
                            <h6> {pets? "Pets allowed" : "No pets allowed"} </h6>
                            <h6> {breakfast && "Free breakfase included"} </h6>
                        </article>
                    </div>
                </section>
                <section className="room-extras">
                    <h6> Extras </h6>
                    <ul>
                        {extras.map(
                            (item, index) => <li key={index}> {item} </li>
                        )}
                    </ul>
                </section>
            </div>
        )
    }
}

export default SingleRoom;
