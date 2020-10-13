import React from 'react'

import { Link } from 'react-router-dom'

export default function NavBar() {
	const navToggle = (e: React.MouseEvent) => {
		document.getElementById('collapsable-nav')?.classList.toggle('hidden')
	}

	return (
		<nav className="flex items-center flex-wrap justify-between bg-blue-500 px-3 lg:px-4">
			<div className="block lg:hidden pt-4 pb-3 lg:py-4">
				<button
					className="flex items-center px-3 py-2 border rounded border-white-100 hover:text-white hover:border-white text-blue-100 focus:outline-none"
					onClick={navToggle}
				>
					<svg
						className="fill-current h-3 w-3"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>Menu</title>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
					</svg>
				</button>
			</div>

			{/* Flex row navigation options for large screens */}
			<div
				id="collapsable-nav"
				className="w-full block lg:flex flex-row lg:items-center lg:justify-end hidden"
			>
				<ul className="w-full flex-1 flex flex-wrap lg:justify-end pr-5 lg:pr-20 mt-2 lg:mt-0">
					<li className="w-full pb-3 lg:py-4 lg:w-auto lg:mt-0 ml-3 lg:ml-16 justify-self-end lg:text-right text-blue-200 hover:text-white cursor-pointer lg:px-3 lg:border-b-2 border-transparent hover:border-blue-100 transition-all duration-300">
						<Link to="/utils">Utilities</Link>
					</li>
					<li className="w-full pb-3 lg:py-4 lg:w-auto lg:mt-0 ml-3 lg:ml-16 justify-self-end lg:text-right text-blue-200 hover:text-white cursor-pointer lg:px-3 lg:border-b-2 border-transparent hover:border-blue-100 transition-all duration-300">
						<Link to="/login">Login</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}
