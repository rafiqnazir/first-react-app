import React from 'react'
import PropTypes from 'prop-types' // proptype is used for type_checking
import { Link } from "react-router-dom";


export default function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">{props.title}</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">

                    <li className="nav-item active">
                        <Link className="nav-link" to="/"> Home </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Link</Link>
                    </li>
                    {props.drop_down ?
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </Link>

                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="#">Action</Link>
                                <Link className="dropdown-item" to="#">Another action</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="#">Something else here</Link>
                            </div>

                        </li> : ""
                    }
                     <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

Header.defaultProps = {
    title: "Default Prop",
    is_admin: false,

}

Header.propTypes = {
    title: PropTypes.string,
    drop_down: PropTypes.bool,
    is_admin: PropTypes.bool.isRequired,
}