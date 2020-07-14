import React, { Component } from 'react';
import logo  from '../images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
                 
        }
    }
    handleToggle = () => {
        this.setState({isOpen: !this.state.isOpen})
    }
    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/"> 
                            <img src={logo} alt="Beach resort"/>
                        </Link>
                        <button 
                            type="button" 
                            className="nav-btn"
                            onClick={this.handleToggle}> <FaBars className="nav-icon"/> </button>
                    </div>
                    <div>
                        <ul className = {this.state.isOpen ? "nav-links show-nav" : "nav-links"}> 
                            <Link to="/"><li>Home</li></Link>
                            <Link to="/rooms"><li>Rooms</li></Link>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar
