import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>DarkPDF</h1>
        <p>An open-source, dark mode PDF viewer for MacOS and Windows.</p>
    </header>
)

export default Header
