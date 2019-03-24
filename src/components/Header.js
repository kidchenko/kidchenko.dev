import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/me.jpeg'

var style = { fontSsize: '0.9em', lineHeight: '0.9em' }

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1 style={{ marginBottom: '1em' }}>
                        <strong>Hi, I am Jose!</strong>
                    </h1>
                    <h2 style={style}>
                        <small>I am a full stack developer, speaker and maker.</small>
                    </h2>
                    <h3 style={style}>
                        C#, Javascript, HTML, CSS and more...
                    </h3>
                </div>
                <Footer />
            </header >
        )
    }
}

export default Header
