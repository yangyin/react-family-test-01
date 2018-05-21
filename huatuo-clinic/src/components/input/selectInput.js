import React,{ Component } from 'react'
import CommonInput from './inputCommon'



@CommonInput({mode:'select'})
export default class SelectInput extends Component {
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