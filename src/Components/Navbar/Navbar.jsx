import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { BiCart } from 'react-icons/bi';
import { HiMenu, HiX } from 'react-icons/hi';

function Navbar({ links }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="fixed top-[4.5rem] left-0 w-full z-[1000] bg-white shadow-md">
      {/* Navbar Wrapper */}
      <div className="flex items-center justify-between w-full p-3">
        {/* Logo - Hidden on larger screens */}
        <div className="ml-4 text-xl font-bold text-[#15803d] md:hidden">
          <Link to="/">Siber Techs</Link>
        </div>

        {/* Menu Toggle for Small Screens */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Navigation Menu */}
        <nav
          className={`${
            menuOpen ? 'block' : 'hidden'
          } absolute top-full left-0 w-full bg-white md:shadow-none shadow-md text-sm md:static md:flex md:items-center md:justify-between md:w-auto md:bg-transparent`}
        >
          <ul className="flex flex-col gap-3 p-4 md:flex-row md:gap-6 md:p-0">
            {links.map((link, index) => (
              <li key={index}>
                <Link to={link.href} className="hover:text-[#15803d]" onClick={closeMenu}>
                  {link.name}
                </Link>
              </li>
            ))}
            {/* Search and Cart Icons within the Mobile Menu */}
            <li className="flex items-center gap-3 mt-4 md:hidden">
              <FaSearch className="cursor-pointer hover:text-[#15803d]" aria-label="Search" />
              <BiCart className="cursor-pointer hover:text-[#15803d]" aria-label="Cart" />
            </li>
          </ul>
        </nav>

        {/* Search and Cart Icons for Larger Screens */}
        <div className="items-center hidden gap-3 mr-4 md:flex">
          <FaSearch className="cursor-pointer hover:text-[#15803d]" aria-label="Search" />
          <BiCart className="cursor-pointer hover:text-[#15803d]" aria-label="Cart" />
        </div>
      </div>
    </div>
  );
}

// Define PropTypes for the Navbar component
Navbar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
};

// Default Links (if no props are passed)
Navbar.defaultProps = {
  links: [
    { name: 'Home', href: '/' },
    { name: 'Hosting', href: '/hosting' },
    { name: 'About Us', href: '/about' },
    { name: 'Service', href: '/service' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contact' },
  ],
};

export default Navbar;
