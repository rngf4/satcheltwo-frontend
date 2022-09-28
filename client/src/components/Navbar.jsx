import React from 'react';
import {NavLink} from 'react-router-dom';
import {useAuth} from '../context/AuthContext';
import {Fragment} from 'react'
import {Disclosure, Menu, Transition} from '@headlessui/react'
import {Bars3Icon, BellIcon, XMarkIcon} from '@heroicons/react/24/outline'

function SignIn() {
	return (<NavLink to='/signin'>Sign in</NavLink>)
}

function SignedIn() {
	const {logOut} = useAuth()

	return (<button onClick={logOut}>Logout</button>)
}

function Navbar() {
	const {user} = useAuth();

	return (<div className='flex justify-between bg-gray-200 h-full p-4'>
		<NavLink to="/">dashboard</NavLink>
		{user?.displayName ? <SignedIn/> : <SignIn/>}
	</div>);
};

const navigation = [{name: "Home", href: '/', private: true}, {name: "Account", href: '/account', private: true}]

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

function NavigationItem({item}) {
	const {auth} = useAuth()
	return (<>
		{((auth.currentUser && item.private) || !item.private) ? (<NavLink
			key={item.name}
			to={item.href}
		>
			{({isActive}) => (
				<div
					className={classNames(isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium')}>
					{item.name}
				</div>
			)}

		</NavLink>) : (<></>)}
	</>)

}

function NavBar() {
	const {auth, logOut} = useAuth()
	return (<Disclosure as="nav" className="bg-gray-800">
		{({open}) => (<>
			<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
				<div className="relative flex h-16 items-center justify-between">
					<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
						{/* Mobile menu button*/}
						<Disclosure.Button
							className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
							<span className="sr-only">Open main menu</span>
							{open ? (<XMarkIcon className="block h-6 w-6" aria-hidden="true"/>) : (
								<Bars3Icon className="block h-6 w-6" aria-hidden="true"/>)}
						</Disclosure.Button>
					</div>
					<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
						<div className="flex flex-shrink-0 items-center">
							<img
								className="block h-8 w-auto lg:hidden"
								src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
								alt="Your Company"
							/>
							<img
								className="hidden h-8 w-auto lg:block"
								src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
								alt="Your Company"
							/>
						</div>
						<div className="hidden sm:ml-6 sm:block">
							<div className="flex space-x-4">
								{navigation.map((item) => (<NavigationItem item={item}/>))}
							</div>
						</div>
					</div>
					<div
						className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
						{/* Profile dropdown */}
						{auth.currentUser ?
							(<Menu as="div" className="relative ml-3">
								<div>
									<Menu.Button
										className="h-8 w-8 rounded-full flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 bg-[url('https://lh3.googleusercontent.com/a-/AFdZucpfDF3pC3QkIHx9TRuZZPfFbNYfSx-4XvZq7khEnA=s96-c')]">
										<span className="sr-only">Open user menu</span>
									</Menu.Button>
								</div>
								<Transition
									as={Fragment}
									enter="transition ease-out duration-100"
									enterFrom="transform opacity-0 scale-95"
									enterTo="transform opacity-100 scale-100"
									leave="transition ease-in duration-75"
									leaveFrom="transform opacity-100 scale-100"
									leaveTo="transform opacity-0 scale-95"
								>
									<Menu.Items
										className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
										<Menu.Item>
											{({active}) => (<NavLink
												to="/account"
												className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
											>
												Your Account
											</NavLink>)}
										</Menu.Item>
										<Menu.Item>
											{({active}) => (<NavLink
												to="/signout"
												className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
											>
												Sign out
											</NavLink>)}
										</Menu.Item>
									</Menu.Items>
								</Transition>
							</Menu>) : (<NavigationItem item={{href: "/signin", name: "Sign In", private: false}} />)
						}
					</div>
				</div>
			</div>

			<Disclosure.Panel className="sm:hidden">
				<div className="space-y-1 px-2 pt-2 pb-3">
					{navigation.map((item) => (<Disclosure.Button
						key={item.name}
						as="a"
						href={item.href}
						className={classNames(item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium')}
						aria-current={item.current ? 'page' : undefined}
					>
						{item.name}
					</Disclosure.Button>))}
				</div>
			</Disclosure.Panel>
		</>)}
	</Disclosure>)
}

export default NavBar;
