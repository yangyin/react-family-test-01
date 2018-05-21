import React,{ Component } from 'react'

import './input.css'



/**
 * config参数说明:mode控制input模式   input：纯input框  select:点击空格选择框 search:搜索框
*/
/**
 * props参数说明：
 *   name:名称 (必填)
 *   subname:  select模式下特有的  选中项 (选填)
 *   lastname: 输入框结尾处说明 （选填） 比如：挂号费 后面的单位（元)
*/

const CommonInput =config=>WrapperComponent => class extends WrapperComponent {

    constructor(props) {
        super(props)
    }

    handleSpace() {
        console.log('我是空格事件')
    }
    render() {
        // console.log('super render: ',super.render())
        // console.log('config: ',config)
        console.log('props: ',this.props)

        const WrapperWidth = config.width || '280px'
        const elementTreee = super.render()
        return (
            <div>
                <div className="wrapper-common-input" style={{width:WrapperWidth}}>
                    <p>{this.props.option.name}：</p>
                    <div className={`wrapper-content-input`}>
                        {this.props.option.subname?<p>{this.props.option.subname}</p>:null}
                        <input type="text" placeholder="请输入" />
                    </div>   
                    <p>{this.props.option.lastname}</p>         
                </div>
            </div>
        )
    }
}

export default  CommonInput