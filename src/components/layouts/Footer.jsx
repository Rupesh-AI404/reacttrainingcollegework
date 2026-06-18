import React from 'react'

const Footer = () => {
	const currentYear = new Date().getFullYear()

	return (
		<footer className='mt-12 border-t bg-slate-50 px-4 py-6 text-center text-sm text-slate-600'>
			<p>© {currentYear} React Training</p>
		</footer>
	)
}

export default Footer
