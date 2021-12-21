import React, { Component } from 'react'

export class Home extends Component {
    state = {   
        slectedFile: null,
    }

    fileSelectedHandler = (event) => {
        console.log(event.target.files[0])
        this.setState({
            slectedFile: event.target.files[0]
        })
    }

    fileUploadHandler = () => {
    
    }
    render() {
        return (
            <>
                <a href="/api/auth/login">Login</a><br /> <br />
                <input type="file" name="file" id="file" onChange={this.fileSelectedHandler} />
                <button onClick={this.fileUploadHandler}>Upload</button>
            </>
        )
    }
}

export default Home
