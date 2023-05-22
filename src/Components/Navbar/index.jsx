import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'

const Navbar = () => {
  const context = useContext(ShoppingCartContext)
  const activeStyle = 'underline underline-offset-4'

  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavLink to='/'>
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink to='/all' onClick={() => context.setSearchByCategory()} className={({ isActive }) => isActive ? activeStyle : undefined}>
            All
          </NavLink>
        </li>
        <li>
          <NavLink to='/clothes' onClick={() => context.setSearchByCategory('clothes')} className={({ isActive }) => isActive ? activeStyle : undefined}>
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink to='/electronics' onClick={() => context.setSearchByCategory('electronics')} className={({ isActive }) => isActive ? activeStyle : undefined}>
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink to='/furnitures' onClick={() => context.setSearchByCategory('furnitures')} className={({ isActive }) => isActive ? activeStyle : undefined}>
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink to='/toys' onClick={() => context.setSearchByCategory('toys')} className={({ isActive }) => isActive ? activeStyle : undefined}>
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink to='/others' onClick={() => context.setSearchByCategory('others')} className={({ isActive }) => isActive ? activeStyle : undefined}>
            Others
          </NavLink>
        </li>
      </ul>
      <ul className='flex items-center gap-3'>
        <li className='text-black/60'>
          simon@gmail.com
        </li>
        <li>
          <NavLink to='/my-orders' className={({ isActive }) => isActive ? activeStyle : undefined}>
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink to='/my-account' className={({ isActive }) => isActive ? activeStyle : undefined}>
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink to='/sign-in' className={({ isActive }) => isActive ? activeStyle : undefined}>
            Sign in
          </NavLink>
        </li>
        <li className='flex items-center cursor-pointer' onClick={() => context.openCheckoutSideMenu()}>
          <ShoppingCartIcon className='h-4 w-4 text-black' />
          <div>{context.count}</div>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
