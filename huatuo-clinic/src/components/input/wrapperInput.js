import React,{ Component } from 'react'
import CommonInput from './inputCommon'



@CommonInput({mode:'input'})
export default class InputOption extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mode:'test'
        }
    }
    render() {
        return null
    }
}

