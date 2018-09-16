import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Header from '../components/Header'
import Nav from '../components/Nav'
import ss1 from '../assets/images/ss1.svg'
import ss2 from '../assets/images/ss2.svg'
import ss3 from '../assets/images/ss3.svg'
import ss4 from '../assets/images/ss4.svg'


class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">

          <section id="intro" className="main special">
            <span className="picture"><img style={{borderRadius: 5, paddingBottom: 15}} src={ss1} alt=""/></span>
                <header className="major">
                  <h2>Free and Open-Source</h2>
                </header>
                <p>We are completely free and open source. This project is still in its infancy state and accepts pull requests. 
                If you like DarkPDF make sure to give us a star on GitHub.
                </p>
                <ul className="actions">
                <a className="button" href="https://github.com/tfaieta/DarkPDF">        
                  Repo
                </a>
                </ul>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>FAQ</h2>
              <p>Coming soon!</p>
            </header>
          </section>

          <section id="third" className="main special">
            <header className="major">
              <h2>Screenshots</h2>
              <span className="picture"><img style={{borderRadius: 5}} src={ss1} alt=""/></span>
              <span className="picture"><img style={{borderRadius: 5}} src={ss2} alt=""/></span>
              <span className="picture"><img style={{borderRadius: 5}} src={ss3} alt=""/></span>
              <span className="picture"><img style={{borderRadius: 5}} src={ss4} alt=""/></span>
            </header>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Install DarkPDF</h2>
              <p>Choose your OS below!</p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/generic" className="button special">MacOSX</Link></li>
                <li><Link to="/generic" className="button">Windows 10</Link></li>
              </ul>
            </footer>
          </section>

        </div>

      </div>
    )
  }
}

Index.propTypes = {
  route: React.PropTypes.object,
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
