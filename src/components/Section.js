import React, { Component } from 'react'




class Section extends Component{
    render(){
        const filtroImg = this.props.imagenes.filter((nombreCard)=>nombreCard.nombre.toLowerCase().indexOf(this.props.buscar.toLowerCase()) !== -1)
        
    return ( <div className="cuerpo">
        {filtroImg.map((img,index)=> <div className="imgBox" key={index}>
                <img className="imgNueva" alt=" " src={img.urlImg}/>
                <p className="name">Nombre:{img.nombre}</p>
                <p className="price">Precio:{img.precio}</p>
            </div>)}
    
    
    </div>
    );
    }
};

export default Section;


