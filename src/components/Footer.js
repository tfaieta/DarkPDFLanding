import React from 'react'
import Link from 'gatsby-link'

const Footer = (props) => (
    <footer style={{alignContent: 'center'}} id="footer">
        <section>
            <h2>DarkPDF is made by <a href="tfaieta.com"> Tony Faieta. </a>
            </h2>
        </section>
        <section>
            <ul className="icons">
                <h2>Follow Me On:</h2>
                <li><a href="https://twitter.com/tfaieta" className="icon fa-twitter alt"><span className="label">Twitter</span></a></li>
                <li><a href="https://github.com/tfaieta" className="icon fa-github alt"><span className="label">GitHub</span></a></li>
            </ul>
        </section>
    </footer>
)

export default Footer
