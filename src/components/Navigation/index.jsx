import { useState, useEffect, useMemo } from 'react'
import { FaCircleUser, FaFolder } from 'react-icons/fa6'
import './styles.scss'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Navigation() {
	const [activeItem, setActiveItem] = useState('')
	const navigate = useNavigate()
	const location = useLocation()

	const items = useMemo(
		() => [
			{ path: '/', icon: <FaCircleUser />, text: 'Profile' },
			{ path: '/projects', icon: <FaFolder />, text: 'Projects' },
		],
		[],
	)

	useEffect(() => {
		setActiveItem(location.pathname)
	}, [location.pathname])

	return (
		<div className='navigation-comp row'>
			<div className='navigation-container row'>
				<div className='navigation-items row'>
					{items.map((item) => (
						<div
							key={item.path}
							className={`item row ${activeItem == item.path && 'active'}`}
							onClick={() => navigate(item.path)}
						>
							<span className='row'>{item.icon}</span>
							<span className='row'>{item.text}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
