import React from 'react';
import { Nav } from './style';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Utilizado para os links...Como o <a> em html

export default function Header() {
  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/login">
        <FaUserAlt size={24} />
      </Link>
      <Link to="adwawdawdawd">
        <FaSignInAlt size={24} />
      </Link>
    </Nav>
  );
}
