import React, { Component } from 'react'

class Footer extends Component{
    render(){
    return <div className="foot"> <p className="pie">Todos los derechos reservados{this.props.name}</p>
     </div>
    }
};

export default Footer;