import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { TabBar } from 'antd-mobile';

@withRouter
class NavLink extends React.Component {
	static propTypes = {
		data:PropTypes.array.isRequired
	}
	constructor(props) {
		super(props)
	}
	render () {
		const Item = TabBar.Item
		const navList = this.props.data.filter(v => !v.hide )
		// console.log(this.props)
		// console.log(navList)
		return(
			<div  className="fixed-footer">
				<TabBar>
					{
						navList.map((v,i) => (
							<Item
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