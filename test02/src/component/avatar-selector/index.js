import React,{Component} from 'react'
import { List,Grid} from 'antd-mobile';

class AvatarSelector extends Component {
    constructor(props) {
        super(props)
        this.state={}
        // this.handleClick = this.handleClick.bind(this)
    }
    handleClick(v,i) {
        // console.log(v,i)
        this.props.avatar(v)
    }
    render() {
        const data = 'boy,girl,man,woman,bull,chick,crab,hedgehog,hippopotamus,koala,lemur,pig,tiger,whale,zebra'
                        .split(',')
                        .map(v =>({
                            icon:require(`../img/${v}.png`),
                            text:v
                        }))
        const headerTitle = this.state.icon ? 
                            <div style={{height:40,boxSize:'border-box'}}>
                                <span>已选择头像</span>
                                <img style={{width:20}} src={this.state.icon} alt=""/>
                            </div> :<div>请选择头像</div>
        return (
            <div>
                <List renderHeader={()=>headerTitle}>
                    <Grid 
                        data={data} 
                        columnNum={5} 
                        onClick={(v,index) =>{
                            this.handleClick(v,index)
                            this.setState(v)
                        }}
                    />
                </List>

            </div>
        )
    }
}

export default AvatarSelector