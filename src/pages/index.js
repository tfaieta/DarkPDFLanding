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
                If you like DarkPDF make sure to give us a star on GitHub. <a href="https://media.giphy.com/media/9oICz6VsaMHsrzEJyo/giphy.gif">See DarkPDF in action!</a>
                </p>
                <ul className="actions">
                <a className="button" href="https://github.com/tfaieta/DarkPDF">        
                  Repo
                </a>
                </ul>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Why?</h2>
              <p>Every day having to read through countless PDFs while 
              all of my other applications run in dark mode, so there was always 
              so much contrast when I had to read PDFs because they often only 
              come in one background color: really bright white.</p>
              <h2>What does it do?</h2>
              <p>DarkPDF takes in a PDF file and goes through a process that turns
               that PDF into an SVG. Once an SVG, we can take in and modify the paths 
               of the drawing mechanism of the DOM. This is how we produce changes in 
               the actual SVG and when rerendered we get a 'dark mode' PDF.</p>
              <h2>How's it built?</h2>
              <p>I wrapped a create-react-app app inside an Electron.js app so I can write 
              in JSX/React but still be writing an app for the desktop. I had to build upon a 
              library called react-pdf in order to convert the files from PDF into SVG and then 
              being able to have some access to the SVG DOM. I spent a lot of time making sure 
              that the colors of the dark mode were of high contrast, I wanted to make sure that 
              the UI/UX was easy, quick, and beautiful so I spent time designing the front-end.</p>
              <h2>Challenges with DarkPDF</h2>
              <p>DarkPDF has problems with rendering images and for some reason there are problems with rendering some PDF's. I'll be starting to manage the issues soon.</p>
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
                <li><a href="https://s3.amazonaws.com/darkpdf-releases/releases/DarkPDF-1.0.0.dmg" className="button special">MacOSX</a></li>
                <li><a to="/generic" className="button">Windows 10</a></li>
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
