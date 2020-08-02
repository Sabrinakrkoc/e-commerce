import React from 'react'


class Search extends React.Component{
    render(){
        return(
            <input className="buscar" value={this.props.buscar} onChange={this.props.handleChange}  type="buscar" placeholder="Buscar"/>
        )
    }
}

export default Search;