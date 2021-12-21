import React, { Component } from 'react'

export class Home extends Component {

    render() {
        return (
            <>
                <a href="/api/auth/login">Login</a><br /> <br />
                <input type="file" name="file" id="file" />
            </>
        )
    }
}

export default Home
