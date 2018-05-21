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

    componentDidUpdate(nextProps,nextState) {
        console.log('selectInput.js props: ' , nextProps)
        console.log('selectInput.js state: ' , nextState)
        console.log('slectinput:  ',this.state)
    }
   
    render() {
        return (
            <p>天</p>
        )
    }
}