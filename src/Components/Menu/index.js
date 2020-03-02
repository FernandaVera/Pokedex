import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Menu extends Component {
    render (){
        return <nav style={{backgroundColor:"#DA6464"}}>
        <ul style={{display:"flex", flexFlow:"row", justifyContent:"space-around"}}>
          <li style={{listStyle: "none"}}>
            <Link to='/'>Search</Link>
          </li>
          <li style={{listStyle: "none"}}>
            <Link to='/Pokedex'>Pokedex</Link>
          </li>
          <li style={{listStyle: "none"}}>
            <Link to='/Profile'>Profile</Link>
          </li>
        </ul>
      </nav>
    }
}

export default Menu