// import React,{ Component } from 'react'
// // import CommonInput from './inputCommon'



// // @CommonInput({mode:'select'})
// export default class SelectInput extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             mode:'test'
//         }
//     }

//     componentDidUpdate(nextProps,nextState) {
//         // console.log('selectInput.js props: ' , nextProps)
//         // console.log('selectInput.js state: ' , nextState)
//         // console.log('slectinput:  ',this.state)
//     }
   
//     render() {
//         const placeholder = this.props.option.placeholder || '空格弹出所有选项'
//         const WrapperWidth = config.width || '280px'
//         return (
//             <div>
//                 <div className="wrapper-common-input" style={{width:WrapperWidth}}>
//                     <p>{this.props.option.name}：</p>
//                     <div className={`wrapper-content-input`}>
//                         {this.state.subname?<p>{this.state.subname}</p>:null}
//                         <input type="text" onKeyUp={this.handleSpace} placeholder={placeholder} />
//                     </div>   
//                     <p>{this.props.option.lastname}</p>         
//                 </div>
//             </div>
//         )
//     }
// }