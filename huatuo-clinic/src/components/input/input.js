import React,{ Component } from 'react'

import './input.css'


const WrapperInput =config=>WrapperComponent => class extends WrapperComponent {
    render() {
        console.log('super render: ',super.render())
        console.log('config: ',config)
        console.log('props: ',this.props)
        const WrapperWidth = config.width || '280px'
        const elementTreee = super.render()
        return (
            <div>
                <div className="wrapper-common-input" style={{width:WrapperWidth}}>
                    <p>药品名称：</p>
                    <div className={`wrapper-content`}>
                        <p>皮试</p>
                        <input type="text" />
                    </div>   
                    {super.render()}          
                </div>
            </div>
        )
    }
}

export default  WrapperInput