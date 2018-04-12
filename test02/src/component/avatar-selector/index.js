import React,{Component} from 'react'
import { NavBar ,List,Grid} from 'antd-mobile';

class AvatarSelector extends Component {
    constructor(props) {
        super(props)
        // this.handleClick = this.handleClick.bind(this)
    }
    handleClick(v,i) {
        console.log(v,i)
        this.props.avatar(v)
    }
    render() {
        const data = 'boy,girl,man,woman,bull,chick,crab,hedgehog,hippopotamus,koala,lemur,pig,tiger,whale,zebra'
                        .split(',')
                        .map(v =>({
                            icon:require(`../img/${v}.png`),
                            text:v
                        }))
        return (
            <div>
                <Grid 
                    data={data} 
                    columnNum={5} 
                    onClick={(v,index) =>this.handleClick(v,index)}
                />

            </div>
        )
    }
}

export default AvatarSelector