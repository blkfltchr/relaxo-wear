import Link from 'next/link'
import NavStyles from './styles/NavStyles'

const Nav = () => (
  <NavStyles>
    <Link href='/'>
      <a>Home</a>
    </Link>
    <Link href='/sell'>
      <a>Items</a>
    </Link>
    <Link href='/'>
      <a>Sell</a>
    </Link>
    <Link href='/sell'>
      <a>Signup</a>
    </Link>
    <Link href='/'>
      <a>Orders</a>
    </Link>
    <Link href='/sell'>
      <a>Me</a>
    </Link>
  </NavStyles>
)

export default Nav;