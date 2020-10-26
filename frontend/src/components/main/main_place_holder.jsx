import React from 'react';



export default class MainPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {logout} = this.props
        return(
            <div>
                Hello world
                <br/>
                <button onClick={logout}>LogOut</button>
            </div>
        )
    }
    }