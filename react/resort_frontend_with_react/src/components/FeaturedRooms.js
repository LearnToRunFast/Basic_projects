import React, { Component } from 'react'
import {RoomContext} from '../context'
import Loading from './Loding'
import Room from './Room'
import Title from './Title'

export default class FeaturedRooms extends Component {
    // setting up context API
    static contextType = RoomContext
    
    render() {
        // unpack value and rename it to rooms
        let {loading, featuredRooms: rooms} = this.context
        rooms = rooms.map(room => {
            return <Room key={room.id} room={room} />
        })

        return (
            <section className='feature-rooms'>
                <Title title="featured rooms" />
                <div className="featured-rooms-center">
                    {loading ? <Loading/> : rooms}
                </div>
 
            </section>
        )
    }
}
 