import React, { Component } from 'react'
import items from './data'

const RoomContext = React.createContext()
// RoomContext.Provider = value
class RoomProvider extends Component {
    constructor(props) {
        super(props)

        this.state = {
            rooms: [],
            sortedRooms: [],
            featuredRooms: [],
            loading: true
        }         
    }
    // 빈값을 설정해놓고 componenteDidMount 로 데이터를 불러온다.

    componentDidMount(){ 
        let rooms = this.formatData(items)
        let featuredRooms = rooms.filter(
            room =>  room.featured === true 
        );
        this.setState({
            rooms, 
            featuredRooms, 
            sortedRooms: rooms, 
            loading: false
        })
        // 원래는 rooms: rooms 이지만 그냥 rooms로 쓸 수 있음. 
    }
    formatData(items){
        let tempItems = items.map(
            item => { 
                let id = item.sys.id
                let images = item.fields.images.map( image => image.fields.file.url)
                let room = {...item.fields,id,images }
                // item.fields 에 이미 images proerty 가 들어가 있는데 다시 define 한 images 를 images:images 로 추가하면 덮어쓰게 된다.  
                //images : images 는 es6 에서 그냥 images로 쓰면 됨.
            
                return room
            }
        )
        return tempItems
    }

    render() {
        return (
            <RoomContext.Provider value={{...this.state}}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}
const RoomConsumer = RoomContext.Consumer

export {RoomProvider, RoomConsumer, RoomContext}
