import React,{ Component } from 'react'

import './input.css'



/**
 * config参数说明:mode控制input模式   input：纯input框  select:点击空格选择框 search:搜索框
*/
/**
 * props参数说明：
 *   name:名称 (必填)
 *   placeholder:默认提示 (选填)
 *   subname:  select模式下特有的  选中项 (选填)
 *   lastname: 输入框结尾处说明 （选填） 比如：挂号费 后面的单位（元)
*/

const CommonInput =config=>WrapperComponent => class extends WrapperComponent {

    constructor(props) {
        super(props)

        this.handleSpace = this.handleSpace.bind(this)

        this.state = {
            inputVal:'',
            subname:this.props.option.subname
        }
    }

    handleSpace(e) {
        console.log('我是空格事件',e.keyCode)
        if(e.keyCode == 32) {
            this.setState({
                subname:'女'
            })
        }
    }

    render() {
        // console.log('super render: ',super.render())
        console.log('config: ',config)
        console.log('props: ',this.props)

        const WrapperWidth = config.width || '280px'
        const placeholder = this.props.option.placeholder || '空格弹出所有选项'
        const elementTreee = super.render()
        return (
            <div>
                <div className="wrapper-common-input" style={{width:WrapperWidth}}>
                    <p>{this.props.option.name}：</p>
                    <div className={`wrapper-content-input`}>
                        {this.state.subname?<p>{this.state.subname}</p>:null}
                        {config.mode == 'input'?<input type="text" placeholder={placeholder} /> : <input type="text" onKeyUp={this.handleSpace} placeholder={placeholder} />}
                    </div>   
                    <p>{this.props.option.lastname}</p>         
                </div>
            </div>
        )
    }
}

export default  CommonInput