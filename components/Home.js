import React, { Component } from 'react'

export class Home extends Component {
    fileSelectedHandler = (event) => {
        console.log(event.target.files[0])
    }

    render() {
        return (
            <>
                <a href="/api/auth/login">Login</a><br /> <br />
                <input type="file" name="file" id="file" onChange={this.fileSelectedHandler} />
            </>
        )
    }
}

export default Home
