import React from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">

        <div className="container-fluid">
          <NavLink className="navbar-brand" to="#">Vivo</NavLink>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active p-3" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active p-3" to="/">Products</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active p-3" to="/">E-Store</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active p-3" to="/">vivo Exclusive store</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active p-3" to="/">Community</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active p-3" to="/">Support</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active p-3" to="/">Function OS</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active p-3" to="/">Explore vivo</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active p-3" to="/">iQOO</NavLink>
              </li>
            </ul>
          </div>


          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active p-2" aria-current="page" to="/"><i class="far fa-user"></i></NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active p-2" to="/"><i class="far fa-comment"></i></NavLink>
              </li>


            </ul>
          </div>


        </div>

      </nav>



    </div>
  )
}

export default Navbar;
