import react from 'react';
import React from 'react'
import Cards from './Cards';
import Jumbo from './Jumbo'
class Home extends React.Component {
    render(){
        return (
            <div>
                <Jumbo/>
                <br></br>
                <Cards></Cards>
            </div>
        )
    }
}

export default Home;