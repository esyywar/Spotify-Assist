import React from 'react'

export default function NavBar() {
	return (
		<nav className="flex items-center flex-wrap justify-between bg-green-600 p-3">
			<div className="block lg:hidden">
				<button className="flex items-center px-3 py-2 border rounded text-teal-200 border-white-100 hover:text-white hover:border-white">
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
			<div className="flex-1 justify-self-end flex items-center justify-end pr-5">
				<div className="ml-8 justify-self-end text-right text-green-200 hover:text-white cursor-pointer">
					Utilities
				</div>
				<div className="ml-8 justify-self-end text-right text-green-200 hover:text-white cursor-pointer">
					Login
				</div>
			</div>
		</nav>
	)
}
