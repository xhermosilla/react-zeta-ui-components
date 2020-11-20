import React from 'react';
import { Link } from 'react-router-dom';

/**
 * ZMenu component
 *
 * @param {{className: string}} props component
 * @returns {object} ZMenu component
 */
export default function ZMenu({ className }) {
  return (
    <nav className={`z-menu navbar fixed-top navbar-expand-md navbar-dark bg-dark ${className}`}>
      <div className="container-fluid">
        <a className="navbar-brand p-0" href="/public">
          <h3 className="pl-2 font-weight-bold title d-inline-block pb-0 pt-1">Zeta</h3>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/public" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/public/login" className="nav-link">Login</Link>
            </li>
            <li className=" nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/public"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/public">Action</a>
                <a className="dropdown-item" href="/public">Another action</a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="/public">Something else here</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/public">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
