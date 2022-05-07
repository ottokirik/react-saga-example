import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <nav>
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
      <div>
        <NavLink to="/latest-news">Latest React News</NavLink>
      </div>
      <div>
        <NavLink to="/popular-news">Popular News</NavLink>
      </div>
    </nav>
  )
}
