import React, {Component} from 'react';
import Title from './Title';
import { FaCocktail, FaShuttleVan, FaHiking, FaBeer} from 'react-icons/fa';

class Services extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            services : [
             {
                icon: <FaCocktail/>,
                title: "free cocktails",
                info: "This is dummy info"
             },
             {
                icon: <FaShuttleVan/>,
                title: "free Shuttle Van",
                info: "This is dummy info"
             },
             {
                icon: <FaHiking/>,
                title: "Various Hiking Options",
                info: "This is dummy info"
             },
             {
                icon: <FaBeer/>,
                title: "free Beer ",
                info: "This is dummy info"
             }
            ]
    }}
    render() {
        return (
            <section className="services">
                <Title title="Services"></Title>
                <div className="services-center">
                    {this.state.services.map( 
                        (item, index) => { return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )}
                    )}
                </div>
            </section>
        )
    }    
}

export default Services;
