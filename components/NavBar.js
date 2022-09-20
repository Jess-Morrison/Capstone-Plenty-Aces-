/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { signOut } from '../utils/auth';

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        <li className="nav-item">
          <Link passHref href="/">
            <a className="navbar-brand" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01">
              <img src="/../logo/navImg.png" width="90" height="90" alt="" />
            </a>
          </Link>
        </li>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link passHref href="/">
                <a className="nav-link">
                  Plenty Aces
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link passHref href="/mainPage">
                <a className="nav-link">
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link passHref href="/userCollection">
                <a className="nav-link">
                  My Collection
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link passHref href="/userProfile">
                <a className="nav-link">
                  My Profile
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link passHref href="/newMovie">
                <a className="nav-link">
                  New Movie
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link passHref href="/newComment">
                <a className="nav-link">
                  New Comment
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link passHref href="/newUser">
                <a className="nav-link">
                  New User?
                </a>
              </Link>
            </li>
            <button style={{ 'background-color': '#84190B', margin: '10px' }} type="button" className="btn btn-danger" onClick={signOut}>
              Sign Out
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
}
