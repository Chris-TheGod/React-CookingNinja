import { Link } from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {
  return (
    <div className='navbar'>
      <nav>
        <Link to='/' className='brand'>
          <h1>Cooking ninja</h1>
        </Link>
        <Link to='/create'>
          <h1>Create recipe</h1>
        </Link>
      </nav>
    </div>
  )
}
