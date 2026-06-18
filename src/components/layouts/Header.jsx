import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<header className='border-b bg-white'>
			<div className='mx-auto flex max-w-6xl items-center justify-between px-4 py-4'>
				<Link to='/' className='text-lg font-semibold text-slate-900'>
					React Training
				</Link>
			</div>
			<div className="flex justify-evenly w-1/2 m-auto py-4">
				<Link to='/home' className='hover:text-slate-900'>Home</Link>
				<Link to='/about' className='hover:text-slate-900'>ABOUT</Link>
				<Link to='/services' className='hover:text-slate-900'>SERVICES</Link>
				<Link to='/blogs' className='hover:text-slate-900'>BLOGS</Link>
				<Link to='/contact' className='hover:text-slate-900'>CONTACT</Link>
			</div>
		</header>
	)
}

export default Header
