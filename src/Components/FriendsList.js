import React, {Component} from 'react';

class FriendsList extends Component{
    constructor(){
        super();
        this.state = {
            friends: [],
            picture: '',
            name: ''
        }
    }

    updatePicture = (value) => {
        this.setState({
            picture: value
        })
    }

    updateName = (value) => {
        this.setState({
            name: value
        })
    }

    addFriend = () => {
        const {picture, name, friends} = this.state
        let newFriend = {picture, name}
        this.setState({
            friends: [...friends, newFriend],
            picture: '',
            name: ''
        })
    }

    render(){
        let mappedFriends = this.state.friends.map((friend, index) => {
            return <div key={index}>
                <img width='100px' src={friend.picture}/>
                <span>{friend.name}</span>
            </div>
        })
        return(
            <div>
                <span>Picture:</span>
                <input 
                    type='text' 
                    placeholder='Link to picture...' 
                    value={this.state.picture}
                    onChange={(e) => this.updatePicture(e.target.value)}/>

                <span>Name:</span>
                <input 
                    type='text' 
                    placeholder="What's your name?" 
                    value={this.state.name}
                    onChange={(e) => this.updateName(e.target.value)}/>

                <button onClick={this.addFriend}>Add Friend</button>
                {mappedFriends}
            </div>
        )
    }

};


export default FriendsList;