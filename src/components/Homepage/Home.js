import react from 'react';
import React from 'react'
import Cards from './Cards';
import Featured from './Featured';
import Jumbo from './Jumbo'
import Statement from './Statement';
class Home extends React.Component {
    render(){
        return (
            <div>
                <Jumbo/>
                <br></br>
                <Cards></Cards>
                <Featured></Featured>
                <Statement></Statement>
            </div>
        )
    }
}

export default Home;