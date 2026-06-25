import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
	const [isDark, setIsDark] = useState(() => {
		const savedTheme = localStorage.getItem('navbar-theme')
		return savedTheme === 'dark'
	})

	useEffect(() => {
		localStorage.setItem('navbar-theme', isDark ? 'dark' : 'light')
	}, [isDark])

	const headerClass = isDark ? 'border-b border-slate-700 bg-slate-900 text-slate-100' : 'border-b border-slate-200 bg-white text-slate-800'
	const brandClass = isDark ? 'text-lg font-semibold text-slate-100' : 'text-lg font-semibold text-slate-900'
	const linkClass = isDark ? 'hover:text-white transition-colors' : 'hover:text-slate-900 transition-colors'
	const buttonClass = isDark
		? 'rounded-md border border-slate-600 bg-slate-800 px-3 py-1.5 text-sm font-medium text-slate-100 hover:bg-slate-700'
		: 'rounded-md border border-slate-300 bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-800 hover:bg-slate-200'

	return (
		<header className={headerClass}>
			<div className='mx-auto flex max-w-6xl items-center justify-between px-4 py-4'>
				<Link to='/' className={brandClass}>
					React Training
				</Link>
				<button type='button' className={buttonClass} onClick={() => setIsDark((prev) => !prev)}>
					{isDark ? 'Light mode' : 'Dark mode'}
				</button>
			</div>
			<div className="flex justify-evenly w-1/2 m-auto py-4">
				<Link to='/home' className={linkClass}>Home</Link>
				<Link to='/about' className={linkClass}>ABOUT</Link>
				<Link to='/services' className={linkClass}>SERVICES</Link>
				<Link to='/blogs' className={linkClass}>BLOGS</Link>
				<Link to='/contact' className={linkClass}>CONTACT</Link>
			</div>
		</header>
	)
}

export default Header
