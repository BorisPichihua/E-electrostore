import { Link } from 'react-router-dom';

const Navbar = ({ menus }) => {
  return (
    <nav>
      {menus.map((menu) => (
        <Link key={menu.id} to={menu.path}>
          {menu.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
