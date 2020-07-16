import React, { Component } from 'react'
import { RoomContext } from '../Context'
import Room from './Room'
import Loading from './Loading'
import Title from './Title'

class FeaturedRooms extends Component {
    static contextType = RoomContext

    render() {
        let { loading, featuredRooms : rooms } = this.context
        rooms = rooms.map( room => <Room key={room.id} room={room}></Room>);   
        return (
            <section className="featured-rooms">
                <Title title="Featured rooms"></Title>
                <div className="featured-rooms-center">
                    {loading ? <Loading/> : rooms}
                </div>
                
            </section>
        )
    }
}

export default FeaturedRooms
