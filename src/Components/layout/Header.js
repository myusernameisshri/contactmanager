import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
/*function Header() {
    return (
        <div>
            <h1>Contact Manager</h1>
        </div>
    )
}*/
const Header= (props) =>{
    const {branding}=props;
    return (
      /*  <div>
            <h1>{branding}</h1>
        </div> */
          <nav className="navbar navbar-expand-styleMedia navbar-dark bg-danger mb-3 py-0">
      <div className="container">
          <a href="/" className="navbar-brand">{branding}</a>
          <div>
              <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link"><i className="fas fa-home"></i> Home</Link>
                    </li>
                        <li className="nav-item">
                            <Link to="/contact/addContact" className="nav-link"><i className="fas fa-plus"></i> Add Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link"><i className="fas fa-question"></i> About</Link>
                        </li>

                  </ul>
              </div>
        </div>
    </nav>
    )
}
Header.defaultProps={
    branding:'My App'
};
Header.propTypes={
    branding : PropTypes.string.isRequired
};
export default Header;