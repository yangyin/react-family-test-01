import React,{ Component } from 'react'
import WrapperInput from './input'



@WrapperInput({mode:this.props})
export default class InputOption extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mode:'test'
        }
    }
    render() {
        return (
            <p>天</p>
        )
    }
}

