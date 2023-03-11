import React from 'react';
import "./footer.css";
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>

      <div className="container">
        <footer className="py-5">
          <div className="row">
            <div className="col-6 col-md-2 mb-3">
              <h5>Popular Links</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-muted">X80 Pro</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-muted">X80</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-muted">V27 Pro</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-muted">V27</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-muted">T1 Pro 5G</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-muted">Y100</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-muted">Y02</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-muted">Y56 5G</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-muted">TWS 2 ANC</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-muted">TWS 2e</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-muted">Wireless Flash Charger</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-muted">All Models</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-muted">Enterprise sales</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-muted">vivo Exclusive store</NavLink></li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>Purchase Online</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-muted">E-store</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-muted">Buy phones</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-muted">Buy accessories</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-muted">My orders</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-muted">Privacy Terms for E-Store</NavLink></li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>Support</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-muted">FAQs</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-muted">Service Center</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-muted">Funtouch OS</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-muted">IMEI Authentication</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-muted">Ouery of Spare Parts Price</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-muted">System Update</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-muted">Write to CEO</NavLink></li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>About vivo</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-muted">Info</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-muted">India Impact Report</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-muted">News centre</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-muted">E-waste Management</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-muted">Careers at vivo</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-muted">Terms and Conditions</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-muted">Investor Information</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-muted">vivo Privacy Center</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-muted">Sustainability</NavLink></li>
              </ul>
            </div>

            <div className="col-md-3 offset-md-1 mb-3">

              <h5>Chat with us</h5>
              <p>Email Us (Reply in 24h)</p>
              <p>24*7</p>
              <h2>1800-208-3388</h2>
              <p>24*7</p>
              <h2>1800-208-3388</h2>
              <p>24*7 (Only for X-Series Customers)</p>
              <h2>1800-208-4488</h2>

            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>© 2023 vivo Mobile India Pvt Ltd. All rights reserved. | Privacy Policy | Cookie Policy | Warranty Terms | Privacy Support | Payment Terms and Policies</p>
            <p>India-English🌐</p>
          </div>
        </footer>
      </div>

    </div>
  )
}

export default Footer;
