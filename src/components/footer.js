import React from 'react';
import logo from 'uswds/img/logo-img.png';

const Footer = () => (
  <footer className="usa-footer site-footer" role="contentinfo">
    <div className="footer-section-bottom bg-base-lighter">
      <div className="grid-container">
        <div className="grid-row padding-3">
          <div className="tablet:grid-col">
            <div className="logo-links">
              <a className="footer-logo media_link" href="https://www.denverda.org/">
                <img src={'https://www.denverda.org/wp-content/uploads/2018/01/Denver-DA-Logo.png'} width="200" alt="Agency logo" />
              </a>
            </div>
          </div>
          <div className="tablet:grid-col"></div>
          <div className="tablet:grid-col">
            <ul className="add-list-reset">
              <li> <a href='https://www.denverda.org/'>Homepage</a></li>
            </ul>
          </div>
          <div className="tablet:grid-col">
            <ul className="add-list-reset">
         
              <li> <a href='https://www.denverda.org/'>Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
