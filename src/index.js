import React from 'react'
import {render} from 'react-dom'

var Greeting = function(props) {
    return (<h1>hello</h1>)
}

render(<Greeting/>, document.getElementById("app"))
