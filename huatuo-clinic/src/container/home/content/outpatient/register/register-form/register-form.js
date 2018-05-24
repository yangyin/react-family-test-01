import React,{ Component } from 'react'
import { Form, Icon, Button ,Select, Spin, Row, Col,Input,DatePicker,InputNumber } from 'antd'
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
        this.onPanelChange = this.onPanelChange.bind(this)
    }
    state = {
        value: [],
        fetching: false,
        datePickerShow:false
    }

    handleChange = (value) => {
        // console.log('handle change: ',value)
        this.setState({
          value:value[value.length -1],
          fetching: false,
        });

    }
    onPanelChange = (v) => {
        this.setState({
            datePickerShow:false
        })
    }
    handleKeyUp = (e,type) => {
        console.log(e.which)
        if(e.which == 32) {
            switch(type) {
                case 'sex':
                    if(!this.props.sex) {
                        this.props.registerSexAction()
                    }
                break
                case 'date':
                    this.setState({
                        datePickerShow:true
                    })
                break
                default:

            }            
        }

        
        
    }
    render() {
        // console.log(' register form props: ',this.props)
        const InputGroup = Input.Group
        const { fetching, data, value } = this.state
        // console.log('render value: ',this.state.datePickerShow)
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
                                    onInputKeyDown={(e)=>this.handleKeyUp(e,'sex')}
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
                                    <InputNumber min={0} placeholder="" size="default" />
                                    <span className="ant-form-text"> 岁</span>
                                </Col>
                                <Col sm={8} style={{display:'flex',alignItems:'center'}}>
                                    <InputNumber min={0} placeholder="" size="default" />
                                    <span className="ant-form-text"> 月</span>
                                </Col>
                                <Col sm={8} style={{display:'flex',alignItems:'center'}}>
                                    <InputNumber min={0} placeholder="" size="default" />
                                    <span className="ant-form-text"> 天</span>
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
                                <div onKeyDown={(e)=>this.handleKeyUp(e,'date')} >
                                    <DatePicker open={this.state.datePickerShow} onChange={this.onPanelChange} />
                                </div>
                            </FormItem>
                        </Col>                     
                    </Row>
                    <Row gutter={16}>
                        <Col sm={8}>
                            <FormItem
                                label="电话"
                                labelCol={{ span: 10 }}
                                wrapperCol={{ span: 14 }}
                            >   
                                <Input placeholder="" size="default" />
                            </FormItem>
                        </Col>  
                        <Col sm={8}>
                            <FormItem
                                label="身份证"
                                labelCol={{ span: 10 }}
                                wrapperCol={{ span: 14 }}
                            >   
                                <Input placeholder="" size="default" />
                            </FormItem>
                        </Col>                     
                    </Row>
                    <Row gutter={16}>
                        <Col sm={8}>
                            <FormItem
                                label="挂号类别"
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
                                    onInputKeyDown={(e)=>this.handleKeyUp(e,'sex')}
                                    style={{ width: '100%' }}
                                >
                                    {this.props.sex?this.props.sex.map(d => <Option key={d.dictItemId}>{d.dictItemName}</Option>):null}
                                </Select>
                            </FormItem>
                        </Col>  
                        <Col sm={8}>
                            <FormItem
                                label="挂号医生"
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
                                    onInputKeyDown={(e)=>this.handleKeyUp(e,'sex')}
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
                                label="就诊类型"
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
                                    onInputKeyDown={(e)=>this.handleKeyUp(e,'sex')}
                                    style={{ width: '100%' }}
                                >
                                    {this.props.sex?this.props.sex.map(d => <Option key={d.dictItemId}>{d.dictItemName}</Option>):null}
                                </Select>
                            </FormItem>
                        </Col>  
                        <Col sm={8}>
                            <FormItem
                                label="挂号费"
                                labelCol={{ span: 10 }}
                                wrapperCol={{ span: 14 }}
                            >   
                                <Col style={{display:'flex',alignItems:'center',width:'100%'}}>
                                    <InputNumber min={0} placeholder="" size="default" style={{width:'100%'}} />
                                    <span className="ant-form-text"> 元</span>
                                </Col>
                            </FormItem>
                        </Col>                     
                    </Row>
                    <Row gutter={24}>
                        <Col sm={24} style={{ textAlign: 'center' }}>
                            <FormItem
                                labelCol={{ span: 10 }}
                                wrapperCol={{ span: 14 }}
                            >   
                                <Button type="primary" htmlType="submit">提交</Button>
                            </FormItem>
                        </Col>                       
                    </Row>
                </Form>
            </div>
        )
    }
}

export default RegisterForm