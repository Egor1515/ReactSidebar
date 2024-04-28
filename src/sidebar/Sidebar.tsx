import React from 'react'
import './Sidebar.css'
import { BotIcon, Inbox, LogIn, ShoppingCart } from 'lucide-react'
import { Users } from 'lucide-react'

const Sidebar = () => {
	return (
		<aside className='wrapper'>
			<div className='sidebar'>
				<ul className='link-list'>
					<li>
						<a href='' className='group'>
							<BotIcon />
							<span className='group title'>Kanban</span>
							<span className='group title-description'>Pro</span>
						</a>
					</li>

					<li>
						<a href='' className='group'>
							<Inbox />
							<span className='group title'>Inbox</span>
						</a>
					</li>

					<li>
						<a href='' className='group'>
							<Users />
							<span className='group title'>Users</span>
							<span className='group title-description users-amount'>1524</span>
						</a>
					</li>
					<li>
						<a href='' className='group'>
							<ShoppingCart />
							<span className='group title'>Shopping</span>
							<span className='group title-description'>15</span>
						</a>
					</li>
					<li>
						<a href='' className='group'>
							<LogIn />
							<span className='group title'>Sign in</span>
						</a>
					</li>
				</ul>
			</div>
		</aside>
	)
}

export default Sidebar
