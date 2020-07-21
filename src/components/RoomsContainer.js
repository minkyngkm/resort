import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import Loading from './Loading';
import { withRoomConsumer } from '../Context'

function RoomContainer ( {context}) {
    const {rooms, sortedRooms, loading} = context;
    if (loading) { 
        return <Loading/>
        }
            return (
                    <>
                        <RoomsFilter rooms={rooms}></RoomsFilter>
                        <RoomsList rooms={sortedRooms}></RoomsList>
                     </>
                    )
    }


export default withRoomConsumer(RoomContainer)

// import React from 'react';
// import RoomsFilter from './RoomsFilter';
// import RoomsList from './RoomsList';
// import { RoomConsumer } from '../Context';
// import Loading from './Loading';

// function RoomsContainer() {
//     return (
//         <RoomConsumer> 
//             {(value) => {
//                 const {rooms, sortedRooms, loading} = value
//                 if (loading) {
//                     return <Loading/>
//                 }
//                 return (
//                     <div>
//                         This is Rooms Container
//                         <RoomsFilter rooms={rooms}></RoomsFilter>
//                         <RoomsList rooms={sortedRooms}></RoomsList>
//                     </div>
//                 )
//             }}
//         </RoomConsumer>
//     )
// }

// export default RoomsContainer;
