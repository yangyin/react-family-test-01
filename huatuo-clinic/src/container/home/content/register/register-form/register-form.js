import React,{ Component } from 'react'
import { Form, Icon, Button } from 'antd'

import InputOption from '../../../../../components/input/wrapperInput'
import SelectInput from '../../../../../components/input/selectInput'


const FormItem = Form.Item

class RegisterForm extends Component {
    constructor(props) {
        super(props)
        
    }


    render() {

        return (
            <div style={{marginTop:'20px'}}>
                <Form>
                    <FormItem>
                        {/* <InputOption option={{name:'姓名',subname:'',lastname:''}} /> */}
                        <SelectInput option={{name:'性别',subname:'男'}} />
                    </FormItem>
                </Form>
            </div>
        )
    }
}

export default RegisterForm