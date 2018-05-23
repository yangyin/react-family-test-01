import React,{ Component } from 'react'
import { Form, Icon, Button ,Select, Spin, Row, Col,Input,DatePicker} from 'antd'
import debounce from 'lodash/debounce'
import { connect } from 'react-redux'

import { registerSexAction } from '../../../../../redux/actions/register.action'

// import InputOption from '../../../../../components/input/wrapperInput'
// import SelectInput from '../../../../../components/input/selectInput'


const FormItem = Form.Item
const Option = Select.Option


@connect(
    state=>state.register,
    {registerSexAction}
)
class RegisterForm extends Component {
    constructor(props) {
        super(props)
        this.lastFetchId = 0;
        // this.fetchUser = debounce(this.fetchUser, 800)
        this.handleKeyUp = this.handleKeyUp.bind(this)
    }
    state = {
        value: [],
        fetching: false,
        datePickerShow:false
    }

    handleChange = (value) => {
        console.log('handle change: ',value)
        this.setState({
          value:value[value.length -1],
          fetching: false,
        });

    }
    handleKeyUp = (e) => {
        console.log(e.which)
        this.setState({
            datePickerShow:true
        })
        if(e.which == 32) {
            if(!this.props.sex) {
                this.props.registerSexAction()
            }
            
        }
    }
    render() {
        // console.log(' register form props: ',this.props)
        const InputGroup = Input.Group
        const { fetching, data, value } = this.state
        console.log('render value: ',value)
        return (
            <div style={{marginTop:'20px'}}>
                <Form>
                    <Row gutter={16}>
                        <Col sm={8}>
                            <FormItem
                                label="姓名"
                                labelCol={{ span: 10 }}
                                wrapperCol={{ span: 14 }}
                            >
                                <Input placeholder="" size="default" />
                            </FormItem>
                        </Col>  
                        <Col sm={8} >
                            <FormItem
                                label="性别"
                                labelCol={{ span: 10 }}
                                wrapperCol={{ span: 14 }}
                            >
                                <Select
                                    mode="tags"
                                    labelInValue
                                    value={value}
                                    notFoundContent={fetching ? <Spin size="small" /> : null}
                                    filterOption={false}
                                    // onSearch={this.fetchUser}
                                    showSearch={true}
                                    onChange={this.handleChange}
                                    onInputKeyDown={this.handleKeyUp}
                                    style={{ width: '100%' }}
                                >
                                    {this.props.sex?this.props.sex.map(d => <Option key={d.dictItemId}>{d.dictItemName}</Option>):null}
                                </Select>
                            </FormItem>
                        </Col>                     
                    </Row>
                    <Row gutter={16}>
                        <Col sm={8}>
                            <FormItem
                                label="年龄"
                                labelCol={{ span: 10 }}
                                wrapperCol={{ span: 14 }}
                            >   
                                <Col sm={8} style={{display:'flex',alignItems:'center'}}>
                                    <Input placeholder="" size="default" />
                                    <span className="ant-form-text"> 年</span>
                                </Col>
                                <Col sm={8} style={{display:'flex',alignItems:'center'}}>
                                    <Input placeholder="" size="default" />
                                    <span className="ant-form-text"> 月</span>
                                </Col>
                                <Col sm={8} style={{display:'flex',alignItems:'center'}}>
                                    <Input placeholder="" size="default" />
                                    <span className="ant-form-text"> 日</span>
                                </Col>
                                
                            </FormItem>
                        </Col>  
                        <Col sm={8} >
                            <FormItem
                                label="出生日期"
                                labelCol={{ span: 10 }}
                                wrapperCol={{ span: 14 }}
                                style={{position:'relative'}}
                            >
                                <div onKeyDown={this.handleKeyUp}>
                                    <DatePicker open={this.state.datePickerShow} />
                                </div>
                                
                                
                            </FormItem>
                        </Col>                     
                    </Row>
                </Form>
            </div>
        )
    }
}

export default RegisterForm