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
            loading: true,
            type : "all",
            price : 0,
            maxPrice : 0,
            minPrice : 0, 
            capacity : 0,
            maxSize: 0,
            minSize: 0,
            size:0,
            pets : false,
            breakfast : false
        }         
    }
    // 빈값을 설정해놓고 componenteDidMount 로 데이터를 불러온다.

    componentDidMount(){ 
        let rooms = this.formatData(items)
        let featuredRooms = rooms.filter(
            room =>  room.featured === true 
        );
        let maxPrice = Math.max(...rooms.map( item => item.price)) 
        let maxSize = Math.max(...rooms.map( item => item.size)) 
        this.setState({
            rooms, 
            featuredRooms, 
            sortedRooms: rooms, 
            loading: false,
            price: maxPrice,
            maxPrice,
            maxSize
        })
        // 원래는 rooms: rooms 이지만 그냥 rooms로 쓸 수 있음. 
    }
    formatData(items){
        let tempItems = items.map(
            item => { 
                let id = item.sys.id
                let images = item.fields.images.map( image => image.fields.file.url)
                let room = {...item.fields,id,images }
                // item.fields 에 이미 images property 가 들어가 있는데 다시 define 한 images 를 images:images 로 추가하면 덮어쓰게 된다.  
                //images : images 는 es6 에서 그냥 images로 쓰면 됨.
            
                return room
            }
        )
        return tempItems
    }
    getRoom = (slug) => { 
        let tempRooms = [...this.state.rooms]
        const room = tempRooms.find( room =>  room.slug === slug)

        return room
    }
    handleChange = (event) => {
        let target = event.target
        let value = target.type === "checkbox"? target.checked : target.value
        let name = target.name
        
        this.setState (
           {[name]: value } , this.filterRooms 
        )
    }
    filterRooms=()=> { 
        let { rooms, capacity, type, price, maxSize, minSize, pets, breakfast} = this.state;

        let tempRooms =  [...rooms];

        capacity = parseInt(capacity);

        price = parseInt(price);

        if (type !== 'all'){
            tempRooms =  tempRooms.filter( room => room.type === type )
        }
    
        if (capacity !== 1) {
            tempRooms = tempRooms.filter( room => room.capacity >= capacity)
        }

        tempRooms  = tempRooms.filter( room => room.price <= price)

        tempRooms = tempRooms.filter ( room =>  room.size >= minSize && room.size <= maxSize )

        if (breakfast) { 
            tempRooms = tempRooms.filter ( room => room.breakfast === true)
        }
        if (pets) { 
            tempRooms = tempRooms.filter ( room => room.pets === true)
        }

        this.setState(
            { sortedRooms: tempRooms }
        )
    }
    render() {
        return (
            <RoomContext.Provider value={{ ...this.state, 
            getRoom: this.getRoom,
            handleChange: this.handleChange}}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer

function withRoomConsumer( Component ){
    return function consumerWrapper(props){
        return <RoomConsumer>
            {value => <Component {...props} context={value} ></Component>}
            {/* context 를 prop으로 넘겨주는 것. 받는 component 에서 this.props.context 로 쓸 수 있음.  */}
            </RoomConsumer>
    }
}

export { RoomProvider, RoomConsumer, RoomContext, withRoomConsumer }
