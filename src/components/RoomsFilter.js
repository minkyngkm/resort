import React from 'react';
import { useContext } from 'react';
import { RoomContext } from '../Context'
import Title from './Title'

function RoomsFilter({rooms}) {
    //get unique value 
    const getUnique = ( items, value ) =>  {
        return [...new Set( items.map(item => item[value]))]
    }
    
    const context = useContext(RoomContext);
    const { type,
            price,
            maxPrice,
            minPrice, 
            capacity,
            maxSize,
            minSize,
            pets,
            breakfast,
            handleChange
        } = context 

    // get uniqute types
    let types = getUnique(rooms,'type')
    types = ['all', ...types];
    types = types.map( (item, index) =>  
        <option value={item} key={index}> {item} </option>
    )
    let people = getUnique(rooms,'capacity')
    people = people.map( (item, index) =>
    <option value ={item} key = {index}> {item} </option>)


    return (
        <section className="filter-container">
            <Title title="Search Rooms"></Title>
            {/* room type */}
            <form className="filter-form">
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select id="type" name="type" value={type} className="form-control" onChange={handleChange}> 
                        {types}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="capacity">guest</label>
                    <select id="capacity" name="capacity" value={capacity} className="form-control" onChange={handleChange}> 
                        {people}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="price"> Room price ${price} </label>
                    <input type="range" id="price" name="price" value={price} min={minPrice} max={maxPrice} onChange={handleChange} className="form-control"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="size">  Room size </label>
                    <div className="size-inputs"> 
                        <input type="number" name="minSize" id="size" value={minSize} className="size-input" onChange={handleChange}></input>
                        <input type="number" name="maxSize" id="size" value={maxSize} className="size-input" onChange={handleChange}></input>
                    </div>                 
                </div>
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange}/>
                        <label htmlFor="breakfast">Breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange}/>
                        <label htmlFor="pets">Pets</label>
                    </div>
                </div>
            </form>    
        </section>
    )
}

export default RoomsFilter;
