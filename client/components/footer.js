import React from 'react'
import {connect} from 'react-redux'

const Footer = () => (
  <div>
    <nav>
        <div>
          <h5>
            Built using the <a href="https://newsapi.org/"> News API </a>
          </h5>
        </div>
    </nav>
    <hr />
  </div>
)
export default connect(null, null)(Footer)

