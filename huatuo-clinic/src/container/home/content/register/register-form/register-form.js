import React,{ Component } from 'react'
import { Form, Icon, Button ,Select, Spin} from 'antd'
import debounce from 'lodash/debounce'
import { connect } from 'react-redux'

import { registerSexAction } from '../../../../../redux/actions/register.action'

// import InputOption from '../../../../../components/input/wrapperInput'
// import SelectInput from '../../../../../components/input/selectInput'


const FormItem = Form.Item
const Option = Select.Option


@connect(
    state=>state,
    {registerSexAction}
)
class RegisterForm extends Component {
    constructor(props) {
        super(props)
        this.lastFetchId = 0;
        this.fetchUser = debounce(this.fetchUser, 800)
        this.handleKeyUp = this.handleKeyUp.bind(this)
    }
    state = {
        data: [],
        value: [],
        fetching: false,
    }

    fetchUser = (value) => {
        console.log('fetching user', value);
        this.lastFetchId += 1;
        const fetchId = this.lastFetchId;
        this.setState({ data: [], fetching: true });
        fetch('https://randomuser.me/api/?results=5')
          .then(response => response.json())
          .then((body) => {
            if (fetchId !== this.lastFetchId) { // for fetch callback order
              return;
            }
            const data = body.results.map(user => ({
              text: `${user.name.first} ${user.name.last}`,
              value: user.login.username,
            }));
            this.setState({ data, fetching: false });
        });
    }
    handleChange = (value) => {
        this.setState({
          value,
          data: [],
          fetching: true,
        });
    }
    handleKeyUp = (e) => {
        console.log(e.which)
        if(e.which == 32) {
            this.props.registerSexAction()
        }
    }
    render() {
        console.log(' register form props: ',this.props)
        const { fetching, data, value } = this.state
        return (
            <div style={{marginTop:'20px'}}>
                <Form>
                    <FormItem>
                    <Select
                        mode="multiple"
                        labelInValue
                        value={value}
                        placeholder="Select users"
                        notFoundContent={fetching ? <Spin size="small" /> : null}
                        filterOption={false}
                        // onSearch={this.fetchUser}
                        onChange={this.handleChange}
                        onInputKeyDown={this.handleKeyUp}
                        style={{ width: '100%' }}
                    >
                        {data.map(d => <Option key={d.value}>{d.text}</Option>)}
                    </Select>
                    </FormItem>
                </Form>
            </div>
        )
    }
}

export default RegisterForm