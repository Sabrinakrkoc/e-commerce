import React from 'react';
import Header from './Header'
import Section from './Section'
import Footer from './Footer'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            imagenes: [],
            buscar: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.setState({
            buscar: e.target.value
        })

    }

    


    componentDidMount(){
        this.setState({
            imagenes : [
    
                {urlImg: 'https://images.pexels.com/photos/414144/pexels-photo-414144.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                 nombre: 'Bosque',
                 precio: '$350' 
                },
                {urlImg: 'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                 nombre: 'Atardecer',
                 precio: '$400'
                },
                {urlImg: 'https://images.pexels.com/photos/531321/pexels-photo-531321.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                 nombre: 'Camino',
                 precio: '$350'
                },
                {urlImg: 'https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                 nombre: 'Espejismo',
                 precio: '$450'
                },
                {urlImg: 'https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                 nombre: 'Lienzo',
                 precio: '$450'
                },
                {urlImg: 'https://images.pexels.com/photos/35888/amazing-beautiful-breathtaking-clouds.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                 nombre: 'La Luna y el Gato',
                 precio: '$450'
                }
            ]
        })
    }

    
    render(){
        return ( <>
            <Header buscar={this.state.buscar} handleChange={this.handleChange}/>
            <Section imagenes={this.state.imagenes} buscar={this.state.buscar} handleChange={this.handleChange}/>
            <Footer/>
            </>
            )
        
    }
}

export default App;