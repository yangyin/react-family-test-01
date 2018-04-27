import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { TabBar } from 'antd-mobile'

import { getMsgList ,recvMsg } from '../../../redux/chat.redux'

@withRouter
@connect(
	state=>state.chat,
	{getMsgList ,recvMsg}
)
class NavLink extends React.Component {
	static propTypes = {
		data:PropTypes.array.isRequired
	}
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		
        this.props.getMsgList()   
        this.props.recvMsg() 
    }
	render () {
		const Item = TabBar.Item
		const navList = this.props.data.filter(v => !v.hide )
		console.log(this.props)
		// console.log(navList)
		return(
			<div  className="fixed-footer">
				<TabBar>
					{
						navList.map((v,i) => (
							<Item
								badge={v.path == '/msg'?this.props.unread : 0}
								title={v.text}
								key={i}
								icon={{uri:require(`./img/${v.icon}.png`)}}
								selectedIcon={{uri:require(`./img/${v.icon}-active.png`)}}
								selected={v.path === this.props.location.pathname}
								onPress= {() => this.props.history.push(v.path)}
							></Item>
						))
					}				
				</TabBar>

			</div>
		)
	}
}

export default NavLink