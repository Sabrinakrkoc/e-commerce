import React, { Component } from 'react'
import Search from './search'


class Header extends Component{
    render(){
        
        return <div className="navbar">
    <h3 className="nombre">Tienda Striata{this.props.name}</h3>
    <Search buscar={this.props.buscar} handleChange={this.props.handleChange}/>
    </div>
    }
};

export default Header;