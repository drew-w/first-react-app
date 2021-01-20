import React, {Component} from 'react';

class Classy extends Component {
    constructor(){
        super();
        this.state = {
            myName: 'Drew',
            bestFriend: 'Jazzmine',
            favFruits: ['strawberry', 'oragne', 'grape']
        }
    }

    changeFriend = () => {
        this.setState({
            bestFriend: 'Tim'
        })
    }

    render(){
        return <div className='classy'>
                <h3>I am a Class Component. I can hold State</h3>
                <div>My name is: {this.state.myName}</div>
                <div>My best friend is: {this.state.bestFriend}</div>
                <button onClick={this.changeFriend}>CHANGE FRIEND</button>
            </div>
    }
}


export default Classy;